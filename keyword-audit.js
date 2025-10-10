// Keyword Audit Script
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Extract keywords from all files
async function extractKeywords() {
  const files = await glob('src/**/*.{ts,tsx}', { cwd: process.cwd() });
  const keywordData = [];

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');

    // Match keywords prop
    const keywordMatch = content.match(/keywords\s*=\s*["{]([^"}]+)["}]/);
    if (keywordMatch) {
      const keywords = keywordMatch[1]
        .split(',')
        .map(k => k.trim())
        .filter(k => k.length > 0);

      keywordData.push({
        file: file.replace('src/', ''),
        keywords: keywords,
        count: keywords.length
      });
    }
  }

  return keywordData;
}

// Analyze keyword frequency
function analyzeKeywordFrequency(keywordData) {
  const frequency = {};

  keywordData.forEach(({ keywords }) => {
    keywords.forEach(keyword => {
      const normalized = keyword.toLowerCase().trim();
      frequency[normalized] = (frequency[normalized] || 0) + 1;
    });
  });

  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .map(([keyword, count]) => ({ keyword, count }));
}

// Analyze keyword combinations
function analyzeKeywordCombinations(keywordData) {
  const allKeywords = keywordData.flatMap(d => d.keywords);
  const words = {};

  allKeywords.forEach(keyword => {
    keyword.toLowerCase().split(/\s+/).forEach(word => {
      words[word] = (words[word] || 0) + 1;
    });
  });

  return Object.entries(words)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([word, count]) => ({ word, count }));
}

// Main audit function
async function runAudit() {
  console.log('🔍 KEYWORD AUDIT - StayCool Airco\n');
  console.log('='.repeat(60));

  const keywordData = await extractKeywords();

  // Summary stats
  console.log('\n📊 SUMMARY');
  console.log('-'.repeat(60));
  console.log(`Total pages with keywords: ${keywordData.length}`);
  console.log(`Total keywords: ${keywordData.reduce((sum, d) => sum + d.count, 0)}`);
  console.log(`Average keywords per page: ${(keywordData.reduce((sum, d) => sum + d.count, 0) / keywordData.length).toFixed(1)}`);

  // Pages with most keywords
  console.log('\n📄 PAGES WITH MOST KEYWORDS');
  console.log('-'.repeat(60));
  keywordData
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)
    .forEach(({ file, count }) => {
      console.log(`${count} keywords - ${file}`);
    });

  // Keyword frequency
  console.log('\n🔁 MOST USED KEYWORDS (showing repeats)');
  console.log('-'.repeat(60));
  const frequency = analyzeKeywordFrequency(keywordData);
  frequency
    .filter(({ count }) => count > 1)
    .slice(0, 15)
    .forEach(({ keyword, count }) => {
      console.log(`${count}x - "${keyword}"`);
    });

  // Word frequency
  console.log('\n📝 MOST USED WORDS IN KEYWORDS');
  console.log('-'.repeat(60));
  const wordFreq = analyzeKeywordCombinations(keywordData);
  wordFreq.forEach(({ word, count }) => {
    console.log(`${count}x - "${word}"`);
  });

  // Keyword categories
  console.log('\n🏷️  KEYWORD CATEGORIES');
  console.log('-'.repeat(60));

  const categories = {
    'Locatie': ['limburg', 'maastricht', 'roermond', 'heerlen', 'venlo', 'sittard', 'weert'],
    'Service': ['installatie', 'onderhoud', 'reparatie', 'montage', 'service'],
    'Product': ['airco', 'airconditioner', 'warmtepomp', 'thuisbatterij'],
    'Merk': ['daikin', 'mitsubishi', 'samsung', 'lg', 'tosot', 'gree'],
    'Technical': ['scop', 'seer', 'energie', 'efficiëntie', 'capaciteit']
  };

  Object.entries(categories).forEach(([category, words]) => {
    const matchCount = frequency.filter(({ keyword }) =>
      words.some(w => keyword.toLowerCase().includes(w))
    ).length;
    console.log(`${category}: ${matchCount} keywords`);
  });

  console.log('\n' + '='.repeat(60));
}

runAudit().catch(console.error);
