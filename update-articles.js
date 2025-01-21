import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const articlesDir = 'C:/Users/Mrvin/Documents/staycoolairco.nl/staycoolairconL/src/pages/articles';
const files = readdirSync(articlesDir);

files.forEach(file => {
  if (!file.endsWith('.tsx')) return;

  const filePath = join(articlesDir, file);
  let content = readFileSync(filePath, 'utf8');

  // Skip if already using MetaTags
  if (content.includes('import MetaTags')) return;

  // Replace Helmet with MetaTags
  content = content.replace(
    /import \{ Helmet \} from ['"]react-helmet-async['"];/,
    `import MetaTags from '../../components/MetaTags';`
  );

  // Extract title and description from Helmet
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  const descriptionMatch = content.match(/content="([^"]*)".*?\/>/);
  const keywordsMatch = content.match(/keywords.*?content="([^"]*)".*?\/>/);

  if (!titleMatch || !descriptionMatch) return;

  const title = titleMatch[1];
  const description = descriptionMatch[1];
  const keywords = keywordsMatch ? keywordsMatch[1] : '';

  // Generate slug from filename
  const slug = file.replace('.tsx', '').toLowerCase();

  // Replace Helmet component with MetaTags
  content = content.replace(
    /<Helmet>[\s\S]*?<\/Helmet>/,
    `<MetaTags
        title="${title}"
        description="${description}"
        ${keywords ? `keywords="${keywords}"` : ''}
        canonicalUrl="https://staycoolairco.nl/kennisbank/${slug}"
        type="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "${title.split('|')[0].trim()}",
          "description": "${description}",
          "author": {
            "@type": "Organization",
            "name": "StayCool Airco"
          },
          "publisher": {
            "@type": "Organization",
            "name": "StayCool Airco",
            "logo": {
              "@type": "ImageObject",
              "url": "https://staycoolairco.nl/images/logo.svg"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://staycoolairco.nl/kennisbank/${slug}"
          },
          "datePublished": "2024-01-01",
          "dateModified": new Date().toISOString().split('T')[0]
        }}
      />`
  );

  writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
