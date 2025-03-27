#!/usr/bin/env node
/**
 * This script optimizes product images to ensure consistent dimensions and formats.
 * It processes all images in the public/images/products directory and its subdirectories.
 * 
 * Features:
 * - Resizes images to standard dimensions
 * - Converts images to WebP format for better compression
 * - Maintains aspect ratio by using contain mode
 * - Creates a white background for transparent images
 * 
 * Usage:
 * node scripts/optimize-product-images.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if Sharp is installed
try {
  require.resolve('sharp');
} catch (e) {
  console.log('Sharp is not installed. Installing...');
  execSync('npm install sharp --save-dev');
}

const sharp = require('sharp');

// Configuration
const config = {
  inputDir: path.join(__dirname, '../public/images/products'),
  // Use the same directory for output to replace original images
  sizes: {
    standard: { width: 800, height: 800 },
    thumbnail: { width: 200, height: 200 }
  },
  quality: 80, // WebP quality (0-100)
  background: { r: 255, g: 255, b: 255, alpha: 1 }, // White background for transparent images
  skipExisting: true, // Skip files that are already optimized
  skipExtensions: ['.webp'] // Skip files with these extensions
};

// Get all image files recursively
function getImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getImageFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

// Check if file should be skipped
function shouldSkipFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  // Skip files with extensions in the skip list
  if (config.skipExtensions.includes(ext)) {
    return true;
  }
  
  // Skip already optimized files based on metadata or other criteria
  if (config.skipExisting) {
    try {
      const stats = fs.statSync(filePath);
      const metadata = sharp(filePath).metadata();
      
      // Skip if the file is already the right size and format
      // This is a simple check - you might want to add more sophisticated checks
      if (ext === '.webp') {
        return true;
      }
    } catch (error) {
      // If we can't check, don't skip
      return false;
    }
  }
  
  return false;
}

// Process an image
async function processImage(inputPath) {
  // Skip files that don't need processing
  if (shouldSkipFile(inputPath)) {
    return { skipped: true, path: inputPath };
  }
  
  const dirName = path.dirname(inputPath);
  const baseName = path.basename(inputPath, path.extname(inputPath));
  
  // Create a temporary file path
  const tempOutputPath = path.join(dirName, `${baseName}_temp.webp`);
  
  try {
    // Process the image
    await sharp(inputPath)
      .resize({
        width: config.sizes.standard.width,
        height: config.sizes.standard.height,
        fit: 'contain',
        background: config.background
      })
      .webp({ quality: config.quality })
      .toFile(tempOutputPath);
    
    // Replace the original file with the optimized one
    const finalOutputPath = path.join(dirName, `${baseName}.webp`);
    
    // If the original file has a different extension, remove it
    if (path.extname(inputPath).toLowerCase() !== '.webp') {
      fs.unlinkSync(inputPath);
    } else if (fs.existsSync(finalOutputPath)) {
      // If the target webp file already exists, remove it
      fs.unlinkSync(finalOutputPath);
    }
    
    // Rename the temp file to the final name
    fs.renameSync(tempOutputPath, finalOutputPath);
    
    return {
      original: inputPath,
      optimized: finalOutputPath,
      replaced: true
    };
  } catch (error) {
    // Clean up temp file if it exists
    if (fs.existsSync(tempOutputPath)) {
      fs.unlinkSync(tempOutputPath);
    }
    throw error;
  }
}

// Main function
async function main() {
  console.log('🔍 Scanning for product images...');
  const imageFiles = getImageFiles(config.inputDir);
  console.log(`📊 Found ${imageFiles.length} images to process.`);
  
  let processed = 0;
  let skipped = 0;
  let errors = 0;
  
  for (const file of imageFiles) {
    try {
      const result = await processImage(file);
      
      if (result.skipped) {
        skipped++;
        console.log(`⏭️  Skipped (${processed + skipped}/${imageFiles.length}): ${path.relative(config.inputDir, file)}`);
      } else {
        processed++;
        console.log(`✅ Processed (${processed + skipped}/${imageFiles.length}): ${path.relative(config.inputDir, file)} → ${path.basename(result.optimized)}`);
      }
    } catch (error) {
      errors++;
      console.error(`❌ Error processing ${path.relative(config.inputDir, file)}:`, error.message);
    }
  }
  
  console.log('\n🎉 Image optimization complete!');
  console.log(`✅ Successfully processed: ${processed} images`);
  console.log(`⏭️  Skipped: ${skipped} images`);
  
  if (errors > 0) {
    console.log(`❌ Errors: ${errors} images`);
  }
  
  // Return success only if there were no errors
  return errors === 0;
}

main()
  .then(success => {
    // Exit with appropriate code
    process.exit(success ? 0 : 1);
  })
  .catch(error => {
    console.error('❌ An unexpected error occurred:', error);
    process.exit(1);
  });
