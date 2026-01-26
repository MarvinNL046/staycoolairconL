/**
 * Maxicool Scraper Configuration
 */

export default {
  // Bright Data API
  brightData: {
    apiKey: 'eb74cc13a9d2b8886970e445602106c99490677afcc77fa2c9c6b230cf3092d0',
    zone: 'web_unlocker_dss',
    apiUrl: 'https://api.brightdata.com/request'
  },

  // Jina AI (backup for simple pages)
  jina: {
    apiKey: 'jina_87f2d697e60a4f93b5b0b7576da1a857shcct21CGvGd4dbCBSyCUHLfKodA',
    readerUrl: 'https://r.jina.ai/'
  },

  // Maxicool website
  maxicool: {
    baseUrl: 'https://www.maxicool.nl',
    locale: 'nl_NL',

    // Categories to scrape (airco related)
    categories: [
      // Single-split sets
      { name: 'LG Single-split', url: '/nl_NL/lg-single-split-airco-sets/4086/' },
      { name: 'Tosot Single-split', url: '/nl_NL/tosot-by-gree-single-split-airco-sets/4087/' },
      { name: 'MaxiCool Single-split', url: '/nl_NL/maxicool-single-split-airco-sets/4088/' },
      // Multi-split sets (correct URLs with products)
      { name: 'LG Multi-split', url: '/nl_NL/lg-multi-split-airco-sets/4233/' },
      { name: 'Tosot Multi-split', url: '/nl_NL/tosot-multi-split-airco-sets/4235/' },
      { name: 'MaxiCool Multi-split', url: '/nl_NL/maxicool-multi-split-airco-sets/4237/' },
      // Commercial
      { name: 'LG Commercieel', url: '/nl_NL/lg-commerciele-airco/4095/' },
      { name: 'Tosot Commercieel', url: '/nl_NL/tosot-by-gree-commerciele-airco/4096/' },
    ]
  },

  // Output settings
  output: {
    dataDir: './data',
    imagesDir: './images',
    imageSize: 'large' // mini, small, normal, large
  },

  // Scraping settings
  scraping: {
    delayBetweenRequests: 2000, // ms
    maxRetries: 3,
    timeout: 30000
  }
};
