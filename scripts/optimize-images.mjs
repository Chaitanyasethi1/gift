import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeAllAssets() {
  const publicDir = path.join(__dirname, '..', 'public');
  const assetsDir = path.join(publicDir, 'assets');

  const files = fs.readdirSync(assetsDir);
  for (const file of files) {
    const fullPath = path.join(assetsDir, file);
    const stat = fs.statSync(fullPath);
    if (!stat.isFile()) continue;

    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg') {
      const buf = fs.readFileSync(fullPath);
      // Only compress if larger than 100KB
      if (buf.length > 100 * 1024) {
        const meta = await sharp(buf).metadata();
        const maxDim = 1200;
        const resizeOpt = (meta.width && meta.width > maxDim) ? { width: maxDim, withoutEnlargement: true } : {};
        const optimized = await sharp(buf)
          .resize(resizeOpt)
          .jpeg({ quality: 80, mozjpeg: true })
          .toBuffer();
        if (optimized.length < buf.length) {
          fs.writeFileSync(fullPath, optimized);
          console.log(`Compressed ${file}: ${(buf.length/1024).toFixed(0)}KB -> ${(optimized.length/1024).toFixed(0)}KB`);
        }
      }
    } else if (ext === '.png') {
      const buf = fs.readFileSync(fullPath);
      if (buf.length > 100 * 1024) {
        const meta = await sharp(buf).metadata();
        const maxDim = 1200;
        const resizeOpt = (meta.width && meta.width > maxDim) ? { width: maxDim, withoutEnlargement: true } : {};
        const optimized = await sharp(buf)
          .resize(resizeOpt)
          .png({ quality: 80, compressionLevel: 9 })
          .toBuffer();
        if (optimized.length < buf.length) {
          fs.writeFileSync(fullPath, optimized);
          console.log(`Compressed ${file}: ${(buf.length/1024).toFixed(0)}KB -> ${(optimized.length/1024).toFixed(0)}KB`);
        }
      }
    }
  }
  console.log('Finished full assets directory compression!');
}

optimizeAllAssets().catch(console.error);
