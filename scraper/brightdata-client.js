/**
 * Bright Data Web Unlocker Client
 * Handles all requests through Bright Data's proxy
 */

import config from './config.js';

class BrightDataClient {
  constructor() {
    this.apiKey = config.brightData.apiKey;
    this.zone = config.brightData.zone;
    this.apiUrl = config.brightData.apiUrl;
  }

  /**
   * Fetch a URL through Bright Data Web Unlocker
   * @param {string} url - URL to fetch
   * @param {object} options - Additional options
   * @returns {Promise<string>} - HTML content
   */
  async fetch(url, options = {}) {
    const maxRetries = options.retries || config.scraping.maxRetries;
    let lastError;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`  [Bright Data] Fetching: ${url} (attempt ${attempt}/${maxRetries})`);

        const response = await fetch(this.apiUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            zone: this.zone,
            url: url,
            format: 'raw' // Get raw HTML
          })
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const html = await response.text();

        if (!html || html.length < 1000) {
          throw new Error('Response too short, might be blocked');
        }

        return html;

      } catch (error) {
        lastError = error;
        console.log(`  [Bright Data] Attempt ${attempt} failed: ${error.message}`);

        if (attempt < maxRetries) {
          const delay = config.scraping.delayBetweenRequests * attempt;
          console.log(`  [Bright Data] Waiting ${delay}ms before retry...`);
          await this.sleep(delay);
        }
      }
    }

    throw new Error(`Failed after ${maxRetries} attempts: ${lastError.message}`);
  }

  /**
   * Download an image through Bright Data
   * @param {string} imageUrl - Image URL
   * @returns {Promise<Buffer>} - Image buffer
   */
  async downloadImage(imageUrl) {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          zone: this.zone,
          url: imageUrl,
          format: 'raw'
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      return Buffer.from(arrayBuffer);

    } catch (error) {
      console.log(`  [Bright Data] Image download failed: ${error.message}`);
      throw error;
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default BrightDataClient;
