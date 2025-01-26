import sharp from 'sharp';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateIcons() {
  const sourceImage = join(__dirname, '../public/images/favicon.png');
  const outputDir = join(__dirname, '../public/images');

  // Ensure output directory exists
  await fs.mkdir(outputDir, { recursive: true });

  const sizes = {
    'favicon-16x16.png': 16,
    'favicon-32x32.png': 32,
    'apple-touch-icon.png': 180
  };

  try {
    for (const [filename, size] of Object.entries(sizes)) {
      await sharp(sourceImage)
        .resize(size, size)
        .toFile(join(outputDir, filename));
      
      console.log(`Generated ${filename}`);
    }

    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();
