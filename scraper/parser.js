/**
 * HTML Parser for Maxicool product pages
 * Extracts product data from HTML using regex and string manipulation
 * (No external dependencies like cheerio needed)
 */

import config from './config.js';

class MaxicoolParser {
  /**
   * Parse category page to extract product URLs
   * @param {string} html - Category page HTML
   * @returns {Array} - Array of product objects with url and name
   */
  parseCategoryPage(html) {
    const products = [];

    // Pattern to find product links: /nl_NL/p/[product-slug]/[id]/
    const productLinkPattern = /href="(\/nl_NL\/p\/[^"]+\/(\d+)\/)"/g;
    const productNamePattern = /<a[^>]*href="(\/nl_NL\/p\/[^"]+)"[^>]*>([^<]+)<\/a>/g;

    // Extract all product URLs
    const urlMatches = [...html.matchAll(productLinkPattern)];
    const uniqueUrls = new Map();

    for (const match of urlMatches) {
      const url = match[1];
      const id = match[2];

      if (!uniqueUrls.has(id)) {
        uniqueUrls.set(id, url);
      }
    }

    // Try to get product names
    const nameMatches = [...html.matchAll(productNamePattern)];
    const urlToName = new Map();

    for (const match of nameMatches) {
      const url = match[1];
      const name = this.decodeHtml(match[2].trim());
      if (name && name.length > 5 && !name.includes('Alle ')) {
        urlToName.set(url, name);
      }
    }

    // Combine URLs with names
    for (const [id, url] of uniqueUrls) {
      // Find name for this URL
      let name = urlToName.get(url) || '';

      // Try alternate URL format
      if (!name) {
        for (const [nameUrl, n] of urlToName) {
          if (nameUrl.includes(url) || url.includes(nameUrl)) {
            name = n;
            break;
          }
        }
      }

      products.push({
        id: id,
        url: config.maxicool.baseUrl + url,
        name: name
      });
    }

    return products;
  }

  /**
   * Check if there's a next page
   * @param {string} html - Category page HTML
   * @returns {string|null} - Next page URL or null
   */
  getNextPageUrl(html) {
    // Look for pagination link with "Volgende" or page=N
    const nextPattern = /href="([^"]*\?page=(\d+))"[^>]*>Volgende/i;
    const match = html.match(nextPattern);

    if (match) {
      return match[1].startsWith('http') ? match[1] : config.maxicool.baseUrl + match[1];
    }

    return null;
  }

  /**
   * Parse product detail page
   * @param {string} html - Product detail page HTML
   * @param {string} url - Product URL
   * @returns {object} - Product data
   */
  parseProductPage(html, url) {
    const product = {
      url: url,
      scraped_at: new Date().toISOString(),
      // Basic info
      name: '',
      brand: '',
      artikelnummer: '',
      artikelnummer_fabrikant: '',
      gtin: '',
      category: '',
      // Content
      description: '',
      pluspunten: [],
      // Specs
      specifications: {},
      // Media
      images: [],
      documents: []
    };

    // Extract product name from H1
    const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
    if (h1Match) {
      product.name = this.decodeHtml(h1Match[1].trim());
    }

    // Extract brand
    const brandMatch = html.match(/Merk:\s*<\/[^>]+>\s*<a[^>]*>([^<]+)<\/a>/i) ||
                       html.match(/<td[^>]*>Merk<\/td>\s*<td[^>]*>([^<]+)<\/td>/i);
    if (brandMatch) {
      product.brand = this.decodeHtml(brandMatch[1].trim());
    }

    // Extract artikelnummer
    const artMatch = html.match(/Artikelnummer(?:\s+fabrikant)?\s*<\/[^>]+>\s*<[^>]+>([^<]+)/gi);
    if (artMatch) {
      for (const match of artMatch) {
        const valueMatch = match.match(/>([^<]+)$/);
        if (valueMatch) {
          const value = valueMatch[1].trim();
          if (match.toLowerCase().includes('fabrikant')) {
            product.artikelnummer_fabrikant = value;
          } else {
            product.artikelnummer = value;
          }
        }
      }
    }

    // Alternative artikelnummer extraction from table
    const artTableMatch = html.match(/<td[^>]*>Artikelnummer<\/td>\s*<td[^>]*>(\d+)<\/td>/i);
    if (artTableMatch && !product.artikelnummer) {
      product.artikelnummer = artTableMatch[1];
    }

    const artFabTableMatch = html.match(/<td[^>]*>Artikelnummer fabrikant<\/td>\s*<td[^>]*>([^<]+)<\/td>/i);
    if (artFabTableMatch && !product.artikelnummer_fabrikant) {
      product.artikelnummer_fabrikant = artFabTableMatch[1].trim();
    }

    // Extract GTIN
    const gtinMatch = html.match(/<td[^>]*>GTIN<\/td>\s*<td[^>]*>(\d+)<\/td>/i);
    if (gtinMatch) {
      product.gtin = gtinMatch[1];
    }

    // Extract category
    const catMatch = html.match(/<td[^>]*>Categorie<\/td>\s*<td[^>]*>([^<]+)<\/td>/i);
    if (catMatch) {
      product.category = this.decodeHtml(catMatch[1].trim());
    }

    // Extract description (paragraphs after headings)
    const descPattern = /<h2[^>]*>[^<]*<\/h2>\s*<p[^>]*>([^<]+(?:<[^p][^>]*>[^<]*<\/[^p][^>]*>[^<]*)*)<\/p>/gi;
    const descMatches = [...html.matchAll(descPattern)];
    const descriptions = [];
    for (const match of descMatches) {
      const text = this.stripHtml(match[1]).trim();
      if (text.length > 50) {
        descriptions.push(text);
      }
    }
    product.description = descriptions.join('\n\n');

    // Extract pluspunten (USPs)
    const pluspuntenPattern = /<li[^>]*>\+\s*([^<]+)<\/li>/gi;
    const pluspuntenMatches = [...html.matchAll(pluspuntenPattern)];
    for (const match of pluspuntenMatches) {
      product.pluspunten.push(this.decodeHtml(match[1].trim()));
    }

    // Extract specifications from table - improved pattern
    // First try to find the Specificaties section
    const specSectionMatch = html.match(/Specificaties<\/h3>[\s\S]*?<table[^>]*>([\s\S]*?)<\/table>/i);
    if (specSectionMatch) {
      const specTableHtml = specSectionMatch[1];
      // Match each table row with two td cells
      // The first td may contain a <span> before the text
      const specRowPattern = /<tr[^>]*>\s*<td[^>]*>([\s\S]*?)<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>\s*<\/tr>/gi;
      const specMatches = [...specTableHtml.matchAll(specRowPattern)];
      for (const match of specMatches) {
        // Strip HTML tags from the key (handles <span> elements)
        const keyHtml = match[1];
        const valueHtml = match[2];
        const key = this.stripHtml(keyHtml).trim();
        const value = this.stripHtml(valueHtml).trim();
        if (key && value && key.length > 1 && !key.toLowerCase().includes('prijs')) {
          product.specifications[key] = this.decodeHtml(value);
        }
      }
    }

    // Fallback: try general table pattern if no specs found
    if (Object.keys(product.specifications).length === 0) {
      const specPattern = /<tr[^>]*>\s*<td[^>]*>([\s\S]*?)<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>\s*<\/tr>/gi;
      const specMatches = [...html.matchAll(specPattern)];
      for (const match of specMatches) {
        const key = this.stripHtml(match[1]).trim();
        const value = this.stripHtml(match[2]).trim();
        if (key && value && key.length > 1 && !key.toLowerCase().includes('prijs')) {
          product.specifications[key] = this.decodeHtml(value);
        }
      }
    }

    // Extract images
    const imagePattern = /\/static\/uploads\/pictures\/(large|normal|small|mini)\/([^"'\s]+\.(webp|jpg|jpeg|png))/gi;
    const imageMatches = [...html.matchAll(imagePattern)];
    const seenImages = new Set();

    for (const match of imageMatches) {
      const size = match[1];
      const filename = match[2];

      // Only get large images, skip duplicates
      if (size === 'large' && !seenImages.has(filename)) {
        seenImages.add(filename);
        product.images.push({
          url: `${config.maxicool.baseUrl}/static/uploads/pictures/large/${filename}`,
          filename: filename
        });
      }
    }

    // If no large images, try other sizes
    if (product.images.length === 0) {
      for (const match of imageMatches) {
        const filename = match[2];
        if (!seenImages.has(filename)) {
          seenImages.add(filename);
          product.images.push({
            url: `${config.maxicool.baseUrl}/static/uploads/pictures/${match[1]}/${filename}`,
            filename: filename
          });
        }
      }
    }

    // Extract documents (PDFs)
    const docPattern = /href="(\/static\/uploads\/[^"]+\.pdf)"[^>]*>([^<]+)<\/a>/gi;
    const docMatches = [...html.matchAll(docPattern)];
    for (const match of docMatches) {
      product.documents.push({
        url: config.maxicool.baseUrl + match[1],
        name: this.decodeHtml(match[2].trim())
      });
    }

    return product;
  }

  /**
   * Decode HTML entities
   */
  decodeHtml(html) {
    return html
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ')
      .replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
  }

  /**
   * Strip HTML tags
   */
  stripHtml(html) {
    return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }
}

export default MaxicoolParser;
