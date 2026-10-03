// Optional authoring tool; generated images are committed for static hosting.
const sharp = require('sharp');
const fs = require('node:fs/promises');
const path = require('node:path');

async function main() {
  const root = path.resolve(__dirname, '..', 'assets/images');
  const source = path.join(root, 'doodling');
  const output = path.join(source, 'thumbnails');
  await fs.mkdir(output, { recursive: true });
  let originalBytes = 0, thumbnailBytes = 0;
  for (const file of (await fs.readdir(source)).sort()) {
    if (!/\.(jpe?g|png)$/i.test(file)) continue;
    const input = path.join(source, file);
    const destination = path.join(output, path.parse(file).name + '.webp');
    const info = await sharp(input).rotate().resize({ width: 800, height: 800, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82 }).toFile(destination);
    originalBytes += (await fs.stat(input)).size;
    thumbnailBytes += info.size;
    console.log(`${file}: ${info.width} x ${info.height}, ${info.size} bytes`);
  }
  const poster = await sharp(path.join(root, 'gifs/doctor_dance.gif'), { animated: false })
    .resize({ width: 480, withoutEnlargement: true }).webp({ quality: 82 })
    .toFile(path.join(root, 'gifs/doctor_dance-poster.webp'));
  console.log(`Animation poster: ${poster.width} x ${poster.height}, ${poster.size} bytes`);
  console.log(`Gallery: ${originalBytes} -> ${thumbnailBytes} bytes (${(100 * (1 - thumbnailBytes / originalBytes)).toFixed(1)}% smaller)`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
