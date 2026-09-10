import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

export async function optimizeProductImages(outDir = 'dist') {
  const changes = [];
  async function scan(dir) {
    for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name);
      if (entry.isDirectory()) { await scan(file); continue; }
      // Keep technical drawings and labels at their original resolution.
      if (!/\.(webp|jpe?g|png)$/i.test(file) || /energy|energie|label|dimension|afmeting|schema|tekening/i.test(file)) continue;
      const original = await fs.readFile(file);
      const meta = await sharp(original).metadata();
      if (meta.pages > 1 || Math.max(meta.width || 0, meta.height || 0) <= 1600) continue;
      const { data, info } = await sharp(original).rotate().resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true }).toBuffer({ resolveWithObject: true });
      if (data.length >= original.length) continue;
      await fs.writeFile(file, data);
      changes.push({ path: '/' + path.relative(outDir, file).split(path.sep).join('/'), originalWidth: meta.width, originalHeight: meta.height, width: info.width, height: info.height, bytesBefore: original.length, bytesAfter: data.length });
    }
  }
  await scan(path.join(outDir, 'images/products'));
  await fs.mkdir('.cache/prerender', { recursive: true });
  await fs.writeFile('.cache/prerender/images.json', JSON.stringify({ changes, bytesSaved: changes.reduce((sum, c) => sum + c.bytesBefore - c.bytesAfter, 0) }, null, 2));
  console.log(`Optimized ${changes.length} large product photos in build output; original source files preserved.`);
}
