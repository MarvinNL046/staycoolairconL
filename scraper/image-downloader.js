/**
 * Image Downloader Module
 * Downloads product images to local filesystem
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import config from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ImageDownloader {
  constructor(brightDataClient) {
    this.client = brightDataClient;
    this.imagesDir = path.resolve(__dirname, config.output.imagesDir);
    this.ensureDir(this.imagesDir);
  }

  /**
   * Ensure directory exists
   */
  ensureDir(dir) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  /**
   * Download all images for a product
   * @param {object} product - Product object with images array
   * @param {string} productId - Product ID for folder naming
   * @returns {Promise<Array>} - Array of downloaded image paths
   */
  async downloadProductImages(product, productId) {
    const downloaded = [];
    const productDir = path.join(this.imagesDir, productId);
    this.ensureDir(productDir);

    for (let i = 0; i < product.images.length; i++) {
      const image = product.images[i];
      try {
        const localPath = await this.downloadImage(image.url, productDir, image.filename);
        downloaded.push({
          original_url: image.url,
          local_path: localPath,
          filename: image.filename
        });
        console.log(`    [Image] Downloaded: ${image.filename}`);

        // Small delay between images
        await this.sleep(500);

      } catch (error) {
        console.log(`    [Image] Failed: ${image.filename} - ${error.message}`);
      }
    }

    return downloaded;
  }

  /**
   * Download a single image
   * @param {string} url - Image URL
   * @param {string} dir - Target directory
   * @param {string} filename - Filename
   * @returns {Promise<string>} - Local file path
   */
  async downloadImage(url, dir, filename) {
    // Try direct download first (often works without proxy)
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
          'Referer': config.maxicool.baseUrl
        }
      });

      if (response.ok) {
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        if (buffer.length > 1000) {
          const filePath = path.join(dir, filename);
          fs.writeFileSync(filePath, buffer);
          return filePath;
        }
      }
    } catch (error) {
      // Direct download failed, try Bright Data
    }

    // Fallback to Bright Data
    const buffer = await this.client.downloadImage(url);
    const filePath = path.join(dir, filename);
    fs.writeFileSync(filePath, buffer);
    return filePath;
  }

  /**
   * Get statistics about downloaded images
   */
  getStats() {
    const stats = {
      totalProducts: 0,
      totalImages: 0,
      totalSize: 0
    };

    if (!fs.existsSync(this.imagesDir)) return stats;

    const productDirs = fs.readdirSync(this.imagesDir);
    stats.totalProducts = productDirs.length;

    for (const dir of productDirs) {
      const productPath = path.join(this.imagesDir, dir);
      if (fs.statSync(productPath).isDirectory()) {
        const files = fs.readdirSync(productPath);
        stats.totalImages += files.length;

        for (const file of files) {
          const filePath = path.join(productPath, file);
          stats.totalSize += fs.statSync(filePath).size;
        }
      }
    }

    return stats;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default ImageDownloader;
