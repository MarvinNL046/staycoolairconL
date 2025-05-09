import fs from 'fs';
import path from 'path';
import { DOMParser, XMLSerializer } from 'xmldom';

// Update the sitemap to include the proper location landing pages
function updateSitemapWithLocations() {
  console.log('Updating sitemap with correct location landing pages...');
  
  // List of locations from your App.tsx routes
  const locations = [
    'roermond', 'maastricht', 'heerlen', 'venlo', 'sittard', 'weert',
    'meerssen', 'valkenburg', 'kerkrade', 'brunssum', 'geleen',
    'stein', 'beek', 'landgraaf', 'venray', 'hoensbroek', 'gennep', 'echt',
    'nederweert', 'vaals', 'panningen', 'maasbracht'
  ];
  
  // Read the existing sitemap
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  
  // Parse the XML
  const parser = new DOMParser();
  const serializer = new XMLSerializer();
  const doc = parser.parseFromString(sitemapContent, 'text/xml');
  const urlset = doc.documentElement;
  
  // Find and remove old location entries
  const urls = doc.getElementsByTagName('url');
  for (let i = urls.length - 1; i >= 0; i--) {
    const url = urls[i];
    const loc = url.getElementsByTagName('loc')[0];
    if (loc) {
      const locText = loc.textContent;
      if (locText.includes('/locations/')) {
        urlset.removeChild(url);
      }
    }
  }
  
  // Add the correct location URLs
  for (const location of locations) {
    // Create new URL element
    const urlElement = doc.createElement('url');
    
    // Create and append loc element
    const locElement = doc.createElement('loc');
    locElement.textContent = `https://staycoolairco.nl/airco-installatie/${location}`;
    urlElement.appendChild(locElement);
    
    // Create and append changefreq element
    const changefreqElement = doc.createElement('changefreq');
    changefreqElement.textContent = 'monthly';
    urlElement.appendChild(changefreqElement);
    
    // Create and append priority element
    const priorityElement = doc.createElement('priority');
    priorityElement.textContent = '0.8';
    urlElement.appendChild(priorityElement);
    
    // Append the URL to the sitemap
    urlset.appendChild(urlElement);
  }
  
  // Serialize back to XML
  const updatedSitemap = serializer.serializeToString(doc);
  
  // Write to both locations
  fs.writeFileSync(sitemapPath, updatedSitemap, 'utf-8');
  fs.writeFileSync(path.join(process.cwd(), 'sitemap.xml'), updatedSitemap, 'utf-8');
  
  console.log('Sitemap updated successfully with correct location landing pages!');
}

updateSitemapWithLocations();
