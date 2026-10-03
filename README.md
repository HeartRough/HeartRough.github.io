# 心坷的个人博客

纯 HTML、CSS 和 JavaScript 静态站点，包含学习日志和涂鸦作品。发布时直接托管仓库中的页面与资源，不需要构建。

## 本地预览

在仓库根目录运行 `python -m http.server 8000 --bind 127.0.0.1`，访问 <http://127.0.0.1:8000/>。
不要通过双击 HTML 文件预览：404 页面的根路径资源需要 HTTP 服务器解析。Python 默认服务器不会自动使用自定义 404 页面，可直接访问 `/404.html` 查看外观；深层错误地址由浏览器测试中的服务器模拟验证。

## 文件结构

- `index.html`：首页。
- `pages/html-study/index.html`：学习日志。
- `pages/gallery/index.html`：作品画廊。
- `404.html`：自定义错误页，资源路径按域名根目录部署配置。
- `assets/css/`：公共样式及各页面样式。
- `assets/js/`：画廊预览和按需播放动画。
- `assets/images/doodling/`：原图；`thumbnails/`：生成的 WebP 缩略图。
- `scripts/generate-images.cjs`：缩略图和 GIF 静态封面生成工具。
- `tests/site.cjs`：浏览器回归检查。

## 新增或更新作品

1. 将 JPG 或 PNG 原图放到 `assets/images/doodling/`，使用不含空格的文件名。
2. 首次使用维护工具时运行 `npm install`（需要 Node.js 22.12+）。
3. 运行 `npm run images`，生成最长边不超过 800px 的 WebP 缩略图及 GIF 首帧封面。原图不会被覆盖。
4. 在画廊复制一个 `figure.gallery-item`，链接指向原图，`img` 指向缩略图；根据脚本输出填写实际 `width`、`height`，并更新作品名、`alt` 和链接标签。非首张图保留 `loading="lazy"`。
5. 将原图、生成资源和页面改动一起提交。删除作品时检查页面引用，再手动清理对应缩略图。

GIF 默认只显示静态封面，点击“播放动画”才下载原始 GIF，点击“停止动画”恢复封面。JavaScript 不可用时仍可通过链接打开原图和 GIF。

## 验证

首次运行 `npx playwright install chromium`，然后运行 `npm test`。
如果使用已安装的 Edge，PowerShell 中可运行 `$env:BROWSER_CHANNEL = 'msedge'` 后再运行 `npm test`。

测试覆盖深层 404 样式与返回首页、画廊按需加载、键盘打开与关闭、焦点恢复、GIF 按需播放，以及 320/768/1280px 视口下的图片和横向溢出检查。测试会自行启动并关闭本地服务器。

`package.json` 中的依赖仅供图片生成与测试使用；线上页面不加载这些依赖。将站点迁移到域名子目录时，需要同步调整 404 页面的根路径链接和资源路径。
