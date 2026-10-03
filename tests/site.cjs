const assert = require('node:assert/strict');
const { test, before, after } = require('node:test');
const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const { chromium } = require('playwright');

let browser, server, base;
before(async () => {
  const root = path.resolve(__dirname, '..');
  server = http.createServer(async (req, res) => {
    let file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    if (!file.startsWith(root + path.sep) && file !== root) { res.writeHead(403).end(); return; }
    if (file.endsWith(path.sep) || file === root) file = path.join(file, 'index.html');
    let body;
    try { body = await fs.readFile(file); }
    catch { file = path.join(root, '404.html'); body = await fs.readFile(file); res.statusCode = 404; }
    const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.gif': 'image/gif' };
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    res.end(body);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  base = `http://127.0.0.1:${server.address().port}`;
  browser = await chromium.launch({ ...(process.env.BROWSER_CHANNEL ? { channel: process.env.BROWSER_CHANNEL } : {}) });
});
after(async () => { await browser?.close(); if (server) await new Promise(resolve => server.close(resolve)); });

test('nested missing URLs keep the styled 404 and a working home link', async () => {
  const page = await browser.newPage();
  try {
    const response = await page.goto(base + '/missing/deep/page');
    assert.equal(response.status(), 404);
    assert.equal(await page.locator('.site-header').evaluate(el => getComputedStyle(el).position), 'sticky');
    await page.getByRole('link', { name: '返回首页', exact: true }).click();
    assert.equal(new URL(page.url()).pathname, '/index.html');
  } finally { await page.close(); }
});

test('gallery keyboard preview retains image clicks and restores focus on close', async () => {
  const page = await browser.newPage();
  try {
    await page.goto(base + '/pages/gallery/index.html');
    const image = page.locator('.gallery-item img').first();
    await image.click();
    await page.locator('#lightboxImg').click();
    assert.equal(await page.locator('#lightbox').isVisible(), true, 'clicking the image must not close its preview');
    await page.keyboard.press('Escape');
    const trigger = page.locator('.gallery-item a').first();
    assert.equal(await trigger.evaluate(el => el === document.activeElement), true);
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('#lightbox').isVisible(), true);
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.querySelector('#lightbox').contains(document.activeElement)), true);
    await page.getByRole('button', { name: '关闭预览' }).click();
    assert.equal(await trigger.evaluate(el => el === document.activeElement), true);
    await trigger.click();
    await page.mouse.click(2, 2);
    assert.equal(await page.locator('#lightbox').isVisible(), false);
  } finally { await page.close(); }
});

test('gallery loads thumbnails before requesting an original on demand', async () => {
  const page = await browser.newPage();
  const requests = [];
  page.on('request', req => requests.push(new URL(req.url()).pathname));
  try {
    await page.goto(base + '/pages/gallery/index.html');
    await page.locator('.gallery-item').last().scrollIntoViewIfNeeded();
    await page.waitForFunction(() => [...document.querySelectorAll('.gallery-item img')].every(img => img.complete && img.naturalWidth > 0));
    assert.equal(requests.some(url => /\/doodling\/[^/]+$/.test(url)), false, 'originals must not load with the gallery');
    await page.locator('.gallery-item img').first().click();
    await page.waitForFunction(() => { const img = document.querySelector('#lightboxImg'); return img.complete && img.naturalWidth > 0; });
    assert.equal(requests.some(url => url.endsWith('/doodling/Money.jpg')), true);
  } finally { await page.close(); }
});

test('study animation downloads only after play and can be stopped', async () => {
  const page = await browser.newPage();
  const requests = [];
  page.on('request', req => requests.push(req.url()));
  try {
    await page.goto(base + '/pages/html-study/index.html');
    assert.equal(requests.some(url => url.endsWith('.gif')), false, 'GIF should not be downloaded initially');
    await page.getByRole('button', { name: '播放动画' }).click();
    await page.waitForFunction(() => { const img = document.querySelector('#studyAnimation'); return img.complete && img.naturalWidth > 0 && img.src.endsWith('.gif'); });
    await page.getByRole('button', { name: '停止动画' }).click();
    assert.equal(await page.locator('#studyAnimation').evaluate(el => el.src.endsWith('.webp')), true);
  } finally { await page.close(); }
});

test('pages render without broken images, script errors or horizontal overflow', async () => {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  try {
    for (const width of [320, 768, 1280]) {
      await page.setViewportSize({ width, height: 900 });
      for (const url of ['/index.html', '/pages/gallery/index.html', '/pages/html-study/index.html', '/404.html']) {
        await page.goto(base + url);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `${url} overflows at ${width}px`);
        for (const img of await page.locator('img:visible').all()) {
          await img.scrollIntoViewIfNeeded();
          await img.evaluate(el => el.decode());
        }
        if (process.env.SCREENSHOT_DIR && (width === 320 || width === 1280)) {
          await fs.mkdir(process.env.SCREENSHOT_DIR, { recursive: true });
          await page.screenshot({ path: path.join(process.env.SCREENSHOT_DIR, `${url.split('/').filter(Boolean).join('-')}-${width}.png`), fullPage: true });
        }
      }
    }
    assert.deepEqual(errors, []);
  } finally { await page.close(); }
});

test('original images remain accessible without JavaScript', async () => {
  const page = await browser.newPage({ javaScriptEnabled: false });
  try {
    await page.goto(base + '/pages/gallery/index.html');
    await page.locator('.gallery-item a').first().click();
    assert.equal(new URL(page.url()).pathname, '/assets/images/doodling/Money.jpg');
    await page.goto(base + '/pages/html-study/index.html');
    assert.equal(await page.getByRole('button', { name: '播放动画' }).count(), 0);
    await page.getByRole('link', { name: /打开原始 GIF/ }).click();
    assert.equal(new URL(page.url()).pathname, '/assets/images/gifs/doctor_dance.gif');
  } finally { await page.close(); }
});

test('failed originals show a recoverable error and the preview can be reopened', async () => {
  const page = await browser.newPage();
  try {
    await page.route('**/doodling/Money.jpg', route => route.abort());
    await page.goto(base + '/pages/gallery/index.html');
    await page.locator('.gallery-item a').first().click();
    await page.getByRole('status').filter({ hasText: '原图加载失败' }).waitFor();
    await page.keyboard.press('Escape');
    await page.unroute('**/doodling/Money.jpg');
    await page.locator('.gallery-item a').first().click();
    await page.waitForFunction(() => {
      const img = document.querySelector('#lightboxImg');
      return img.complete && img.naturalWidth > 0 && !img.hidden;
    });
    assert.equal(await page.getByRole('status', { includeHidden: true }).textContent(), '');
  } finally { await page.close(); }
});

test('failed animation returns to its static poster and allows a retry', async () => {
  const page = await browser.newPage();
  try {
    await page.route('**/doctor_dance.gif', route => route.abort());
    await page.goto(base + '/pages/html-study/index.html');
    await page.getByRole('button', { name: '播放动画' }).click();
    await page.getByRole('status').filter({ hasText: '动画加载失败' }).waitFor();
    assert.equal(await page.locator('#studyAnimation').evaluate(img => img.src.endsWith('.webp')), true);
    await page.unroute('**/doctor_dance.gif');
    await page.getByRole('button', { name: '播放动画' }).click();
    await page.waitForFunction(() => {
      const img = document.querySelector('#studyAnimation');
      return img.complete && img.naturalWidth > 0 && img.src.endsWith('.gif');
    });
  } finally { await page.close(); }
});
