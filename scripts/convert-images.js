import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const sourceDir = 'public/images/products/Mitsubishi heavy indus';
const targetDir = 'public/images/products/Mitsubishi heavy indus';

async function convertImages() {
    try {
        // Read all files in the source directory
        const files = await fs.readdir(sourceDir);
        
        // Filter for jpg files
        const jpgFiles = files.filter(file => 
            file.toLowerCase().endsWith('.jpg')
        );

        // Convert each jpg file to webp
        for (const file of jpgFiles) {
            const sourcePath = path.join(sourceDir, file);
            const targetPath = path.join(targetDir, file.replace(/\.jpg$/i, '.webp'));
            
            console.log(`Converting ${file} to WebP...`);
            
            await sharp(sourcePath)
                .webp({ quality: 80 }) // 80% quality for good balance of quality and file size
                .toFile(targetPath);
                
            console.log(`Successfully converted ${file} to WebP`);
            
            // Note: Original jpg files are kept
            console.log(`Original file kept: ${file}`);
        }
        
        console.log('All images have been converted to WebP format!');
        
    } catch (error) {
        console.error('Error converting images:', error);
    }
}

convertImages();
