#!/usr/bin/env node
/**
 * Maxicool Product Scraper
 *
 * Scrapes product info and images from maxicool.nl
 * Uses Bright Data Web Unlocker for JavaScript-rendered content
 *
 * Usage:
 *   node scraper.js                    # Scrape all categories
 *   node scraper.js --category 0       # Scrape first category only
 *   node scraper.js --test             # Test with 1 product
 *   node scraper.js --no-images        # Skip image downloads
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import config from './config.js';
import BrightDataClient from './brightdata-client.js';
import MaxicoolParser from './parser.js';
import ImageDownloader from './image-downloader.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class MaxicoolScraper {
  constructor(options = {}) {
    this.options = {
      downloadImages: true,
      testMode: false,
      categoryIndex: null,
      ...options
    };

    this.client = new BrightDataClient();
    this.parser = new MaxicoolParser();
    this.imageDownloader = new ImageDownloader(this.client);

    this.dataDir = path.resolve(__dirname, config.output.dataDir);
    this.ensureDir(this.dataDir);

    this.stats = {
      categoriesProcessed: 0,
      productsFound: 0,
      productsScraped: 0,
      imageDownloaded: 0,
      errors: []
    };
  }

  ensureDir(dir) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  /**
   * Main entry point
   */
  async run() {
    console.log('='.repeat(60));
    console.log('  MAXICOOL PRODUCT SCRAPER');
    console.log('='.repeat(60));
    console.log(`  Mode: ${this.options.testMode ? 'TEST (1 product)' : 'FULL'}`);
    console.log(`  Images: ${this.options.downloadImages ? 'YES' : 'NO'}`);
    console.log('='.repeat(60));
    console.log('');

    const startTime = Date.now();
    const allProducts = [];

    // Determine which categories to scrape
    let categories = config.maxicool.categories;
    if (this.options.categoryIndex !== null) {
      categories = [categories[this.options.categoryIndex]];
    }

    // Process each category
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      console.log(`\n[${i + 1}/${categories.length}] Category: ${category.name}`);
      console.log('-'.repeat(50));

      try {
        const products = await this.scrapeCategory(category);
        allProducts.push(...products);
        this.stats.categoriesProcessed++;

        // Save progress after each category
        this.saveProducts(allProducts, 'all_products.json');

      } catch (error) {
        console.log(`  ERROR: ${error.message}`);
        this.stats.errors.push({ category: category.name, error: error.message });
      }

      // Delay between categories
      if (i < categories.length - 1) {
        console.log(`\n  Waiting before next category...`);
        await this.sleep(config.scraping.delayBetweenRequests);
      }
    }

    // Final save
    this.saveProducts(allProducts, 'all_products.json');

    // Print summary
    const duration = Math.round((Date.now() - startTime) / 1000);
    this.printSummary(duration);

    return allProducts;
  }

  /**
   * Scrape all products from a category
   */
  async scrapeCategory(category) {
    const products = [];
    let pageUrl = config.maxicool.baseUrl + category.url;
    let pageNum = 1;

    // First, collect all product URLs from all pages
    const productUrls = [];

    while (pageUrl) {
      console.log(`\n  Page ${pageNum}:`);

      try {
        const html = await this.client.fetch(pageUrl);
        const pageProducts = this.parser.parseCategoryPage(html);

        console.log(`    Found ${pageProducts.length} products`);
        productUrls.push(...pageProducts);

        // Check for next page
        const nextPage = this.parser.getNextPageUrl(html);
        if (nextPage && nextPage !== pageUrl) {
          pageUrl = nextPage;
          pageNum++;
          await this.sleep(config.scraping.delayBetweenRequests);
        } else {
          pageUrl = null;
        }

      } catch (error) {
        console.log(`    Page error: ${error.message}`);
        pageUrl = null;
      }
    }

    console.log(`\n  Total products in category: ${productUrls.length}`);
    this.stats.productsFound += productUrls.length;

    // In test mode, only process 1 product
    const toProcess = this.options.testMode ? productUrls.slice(0, 1) : productUrls;

    // Now scrape each product detail page
    for (let i = 0; i < toProcess.length; i++) {
      const productInfo = toProcess[i];
      console.log(`\n  [${i + 1}/${toProcess.length}] ${productInfo.name || productInfo.url}`);

      try {
        const product = await this.scrapeProduct(productInfo);
        product.category_name = category.name;
        products.push(product);
        this.stats.productsScraped++;

        // Save individual product
        this.saveProducts([product], `product_${product.artikelnummer || product.id}.json`);

        // Download images
        if (this.options.downloadImages && product.images.length > 0) {
          const downloaded = await this.imageDownloader.downloadProductImages(
            product,
            product.artikelnummer || product.id
          );
          product.downloaded_images = downloaded;
          this.stats.imageDownloaded += downloaded.length;
        }

        // Delay between products
        await this.sleep(config.scraping.delayBetweenRequests);

      } catch (error) {
        console.log(`    ERROR: ${error.message}`);
        this.stats.errors.push({ product: productInfo.url, error: error.message });
      }
    }

    return products;
  }

  /**
   * Scrape a single product detail page
   */
  async scrapeProduct(productInfo) {
    const html = await this.client.fetch(productInfo.url);
    const product = this.parser.parseProductPage(html, productInfo.url);

    // Add ID from URL if not found
    if (!product.artikelnummer && productInfo.id) {
      product.id = productInfo.id;
    }

    console.log(`    Name: ${product.name}`);
    console.log(`    Brand: ${product.brand}`);
    console.log(`    SKU: ${product.artikelnummer || 'N/A'}`);
    console.log(`    Specs: ${Object.keys(product.specifications).length}`);
    console.log(`    Images: ${product.images.length}`);

    return product;
  }

  /**
   * Save products to JSON file
   */
  saveProducts(products, filename) {
    const filePath = path.join(this.dataDir, filename);
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2), 'utf8');
  }

  /**
   * Print summary
   */
  printSummary(duration) {
    console.log('\n');
    console.log('='.repeat(60));
    console.log('  SCRAPING COMPLETE');
    console.log('='.repeat(60));
    console.log(`  Duration:           ${duration} seconds`);
    console.log(`  Categories:         ${this.stats.categoriesProcessed}`);
    console.log(`  Products found:     ${this.stats.productsFound}`);
    console.log(`  Products scraped:   ${this.stats.productsScraped}`);
    console.log(`  Images downloaded:  ${this.stats.imageDownloaded}`);
    console.log(`  Errors:             ${this.stats.errors.length}`);
    console.log('='.repeat(60));

    if (this.stats.errors.length > 0) {
      console.log('\nErrors:');
      for (const err of this.stats.errors) {
        console.log(`  - ${err.category || err.product}: ${err.error}`);
      }
    }

    console.log(`\nData saved to: ${this.dataDir}`);
    console.log(`Images saved to: ${path.resolve(__dirname, config.output.imagesDir)}`);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// CLI
async function main() {
  const args = process.argv.slice(2);
  const options = {
    downloadImages: !args.includes('--no-images'),
    testMode: args.includes('--test'),
    categoryIndex: null
  };

  // Check for category index
  const catIndex = args.indexOf('--category');
  if (catIndex !== -1 && args[catIndex + 1]) {
    options.categoryIndex = parseInt(args[catIndex + 1], 10);
  }

  const scraper = new MaxicoolScraper(options);
  await scraper.run();
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
