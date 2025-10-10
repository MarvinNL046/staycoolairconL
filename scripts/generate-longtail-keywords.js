#!/usr/bin/env node
/**
 * 🚀 LONG-TAIL KEYWORD GENERATOR
 *
 * Generates SEO-optimized long-tail keywords for location-based pages
 *
 * Usage:
 *   node scripts/generate-longtail-keywords.js
 *   node scripts/generate-longtail-keywords.js --city roermond
 *   node scripts/generate-longtail-keywords.js --export keywords.json
 */

import fs from 'fs';
import path from 'path';

// ============================================================================
// CONFIGURATION
// ============================================================================

// All locations from App.tsx
const LOCATIONS = [
  { name: 'Roermond', region: 'Midden-Limburg', population: 58000, postcodes: ['6041', '6042', '6043'] },
  { name: 'Maastricht', region: 'Zuid-Limburg', population: 122000, postcodes: ['6211', '6221', '6229'] },
  { name: 'Heerlen', region: 'Zuid-Limburg', population: 87000, postcodes: ['6411', '6419', '6431'] },
  { name: 'Venlo', region: 'Noord-Limburg', population: 101000, postcodes: ['5911', '5912', '5913'] },
  { name: 'Sittard', region: 'Zuid-Limburg', population: 47000, postcodes: ['6131', '6132', '6133'] },
  { name: 'Weert', region: 'Midden-Limburg', population: 50000, postcodes: ['6001', '6002', '6003'] },
  { name: 'Geleen', region: 'Zuid-Limburg', population: 33000, postcodes: ['6161', '6162', '6163'] },
  { name: 'Stein', region: 'Zuid-Limburg', population: 25000, postcodes: ['6171', '6172', '6173'] },
  { name: 'Landgraaf', region: 'Zuid-Limburg', population: 37000, postcodes: ['6371', '6372', '6373'] }
];

// Keyword templates organized by intent
const KEYWORD_TEMPLATES = {
  // Transactional keywords (high commercial intent)
  transactional: [
    '{service} {city}',
    '{service} {city} prijs',
    '{service} {city} kosten',
    'kosten {service} {city}',
    'prijs {service} {city}',
    '{service} laten installeren {city}',
    '{specialist} {city}',
    '{specialist} bij mij in de buurt {city}',
    '{specialist} dichtbij {city}',
    'goedkope {service} {city}',
    'betrouwbare {specialist} {city}',
    'erkende {specialist} {city}',
    '{service} {city} met garantie',
    '{service} inclusief montage {city}',
    '{service} {postcode}',
    '{service} {city} spoedservice',
    '{service} {city} 24/7'
  ],

  // Informational keywords (high search volume)
  informational: [
    'wat kost {service} {city}',
    'hoe werkt {product} {city}',
    'beste {product} voor {city}',
    '{product} {city} vergelijken',
    '{product} {city} review',
    '{product} {city} ervaringen',
    '{specialist} {city} advies',
    'welke {product} kiezen {city}',
    '{service} {city} tips',
    '{service} {city} voor en nadelen'
  ],

  // Local SEO keywords (location-specific)
  local: [
    '{specialist} bij mij in de buurt {city}',
    '{service} {postcode}',
    '{service} {city} centrum',
    '{service} {region}',
    '{specialist} regio {city}',
    '{service} {city} en omgeving',
    '{service} {city} omstreken',
    'lokale {specialist} {city}',
    '{specialist} uit {city}',
    '{service} bij u thuis {city}'
  ],

  // Long-tail question keywords (voice search optimized)
  questions: [
    'waar kan ik {service} in {city}',
    'wie doet {service} in {city}',
    'hoe snel kan {service} {city}',
    'wat is de beste {specialist} in {city}',
    'hoeveel kost {service} in {city}',
    'waar vind ik {specialist} in {city}',
    'kan ik {service} in {city}',
    'mag ik {service} zonder vergunning {city}',
    'wanneer {service} nodig {city}',
    'waarom kiezen voor {specialist} {city}'
  ],

  // Seasonal/Trending keywords
  seasonal: [
    '{service} {city} zomer',
    '{service} {city} winter',
    '{service} {city} hittegolf',
    '{service} {city} 2025',
    '{service} {city} aanbieding',
    '{service} {city} actie',
    '{service} {city} Black Friday',
    '{service} {city} voorjaar'
  ]
};

// Service variations
const SERVICES = [
  'airco installatie',
  'airco plaatsen',
  'airco montage',
  'airconditioning installatie',
  'klimaatbeheersing',
  'airco onderhoud',
  'airco reparatie',
  'airco service',
  'warmtepomp installatie',
  'split airco installatie',
  'multi split installatie'
];

// Specialist variations
const SPECIALISTS = [
  'airco installateur',
  'airco monteur',
  'airco specialist',
  'airco vakman',
  'klimaatbeheersing specialist',
  'airconditioning installateur',
  'airco bedrijf',
  'airco expert'
];

// Product variations
const PRODUCTS = [
  'airco',
  'airconditioner',
  'split airco',
  'multi split airco',
  'mobiele airco',
  'vloer airco',
  'plafond airco',
  'warmtepomp',
  'inverter airco'
];

// ============================================================================
// KEYWORD GENERATION FUNCTIONS
// ============================================================================

/**
 * Replace template variables with actual values
 */
function fillTemplate(template, vars) {
  return template
    .replace(/{city}/g, vars.city)
    .replace(/{region}/g, vars.region)
    .replace(/{postcode}/g, vars.postcode)
    .replace(/{service}/g, vars.service)
    .replace(/{specialist}/g, vars.specialist)
    .replace(/{product}/g, vars.product);
}

/**
 * Calculate keyword difficulty (0-100)
 * Lower = easier to rank for
 */
function calculateDifficulty(keyword) {
  const words = keyword.split(' ').length;
  const hasLocation = keyword.includes('6') || /[A-Z][a-z]+/.test(keyword);
  const hasQuestion = ['wat', 'hoe', 'waar', 'wie', 'wanneer', 'waarom'].some(q => keyword.startsWith(q));

  let difficulty = 50; // Base difficulty

  // Longer keywords are easier
  if (words >= 5) difficulty -= 20;
  else if (words >= 4) difficulty -= 10;

  // Location-specific are easier
  if (hasLocation) difficulty -= 15;

  // Questions are easier
  if (hasQuestion) difficulty -= 10;

  // Specific services are easier
  if (keyword.includes('postcode') || keyword.includes('bij mij')) difficulty -= 10;

  return Math.max(10, Math.min(90, difficulty));
}

/**
 * Estimate search volume category
 */
function estimateVolume(keyword, location) {
  const words = keyword.split(' ').length;
  const population = location.population;

  // Generic short keywords = high volume
  if (words <= 3 && !keyword.includes('postcode')) {
    if (population > 80000) return 'high';
    if (population > 40000) return 'medium';
    return 'low';
  }

  // Long-tail keywords = low volume but high conversion
  if (words >= 5) return 'low';

  // Medium tail = medium volume
  return 'medium';
}

/**
 * Determine commercial intent (high/medium/low)
 */
function commercialIntent(keyword) {
  const highIntent = ['kosten', 'prijs', 'goedkope', 'aanbieding', 'offerte', 'bij mij in de buurt', 'dichtbij'];
  const mediumIntent = ['installatie', 'plaatsen', 'montage', 'service', 'specialist'];

  if (highIntent.some(word => keyword.includes(word))) return 'high';
  if (mediumIntent.some(word => keyword.includes(word))) return 'medium';
  return 'low';
}

/**
 * Generate all keywords for a location
 */
function generateKeywordsForLocation(location) {
  const keywords = [];

  // For each category
  Object.entries(KEYWORD_TEMPLATES).forEach(([category, templates]) => {
    templates.forEach(template => {
      // Try each service
      SERVICES.forEach(service => {
        SPECIALISTS.forEach(specialist => {
          PRODUCTS.forEach(product => {
            // Try each postcode
            location.postcodes.forEach(postcode => {
              const vars = {
                city: location.name,
                region: location.region,
                postcode: postcode,
                service: service,
                specialist: specialist,
                product: product
              };

              const keyword = fillTemplate(template, vars);

              // Add keyword with metadata
              keywords.push({
                keyword: keyword,
                category: category,
                city: location.name,
                region: location.region,
                postcode: postcode,
                difficulty: calculateDifficulty(keyword),
                volume: estimateVolume(keyword, location),
                intent: commercialIntent(keyword),
                length: keyword.split(' ').length
              });
            });
          });
        });
      });
    });
  });

  // Remove duplicates
  const unique = [];
  const seen = new Set();
  keywords.forEach(kw => {
    if (!seen.has(kw.keyword)) {
      seen.add(kw.keyword);
      unique.push(kw);
    }
  });

  return unique;
}

/**
 * Generate priority keywords (best opportunities)
 */
function getPriorityKeywords(keywords) {
  return keywords
    .filter(kw =>
      kw.intent === 'high' &&
      kw.difficulty < 50 &&
      kw.length >= 4
    )
    .sort((a, b) => a.difficulty - b.difficulty)
    .slice(0, 20);
}

/**
 * Get quick wins (easy to rank for)
 */
function getQuickWins(keywords) {
  return keywords
    .filter(kw =>
      kw.difficulty < 30 &&
      kw.length >= 5
    )
    .sort((a, b) => a.difficulty - b.difficulty)
    .slice(0, 15);
}

// ============================================================================
// OUTPUT FUNCTIONS
// ============================================================================

/**
 * Print keywords to console
 */
function printKeywords(location, keywords) {
  console.log(`\n${'='.repeat(80)}`);
  console.log(`📍 LONG-TAIL KEYWORDS: ${location.name}`);
  console.log(`${'='.repeat(80)}\n`);

  console.log(`📊 Statistics:`);
  console.log(`   Total Keywords: ${keywords.length}`);
  console.log(`   High Intent: ${keywords.filter(k => k.intent === 'high').length}`);
  console.log(`   Easy to Rank (<30 difficulty): ${keywords.filter(k => k.difficulty < 30).length}`);
  console.log(`   Long-tail (5+ words): ${keywords.filter(k => k.length >= 5).length}\n`);

  // Priority keywords
  const priority = getPriorityKeywords(keywords);
  console.log(`🎯 TOP 20 PRIORITY KEYWORDS (High Intent + Low Difficulty):`);
  console.log(`${'─'.repeat(80)}`);
  priority.forEach((kw, idx) => {
    console.log(`${(idx + 1).toString().padStart(2)}. "${kw.keyword}"`);
    console.log(`    Difficulty: ${kw.difficulty} | Intent: ${kw.intent} | Volume: ${kw.volume} | Category: ${kw.category}`);
  });

  // Quick wins
  const quickWins = getQuickWins(keywords);
  console.log(`\n⚡ QUICK WINS (Easy to Rank, Long-tail):`);
  console.log(`${'─'.repeat(80)}`);
  quickWins.forEach((kw, idx) => {
    console.log(`${(idx + 1).toString().padStart(2)}. "${kw.keyword}" (Difficulty: ${kw.difficulty})`);
  });

  // By category
  console.log(`\n📂 KEYWORDS BY CATEGORY:`);
  console.log(`${'─'.repeat(80)}`);
  Object.keys(KEYWORD_TEMPLATES).forEach(category => {
    const count = keywords.filter(k => k.category === category).length;
    const sample = keywords.filter(k => k.category === category).slice(0, 3);
    console.log(`\n${category.toUpperCase()} (${count} keywords):`);
    sample.forEach(kw => console.log(`   • "${kw.keyword}"`));
  });
}

/**
 * Export keywords to JSON
 */
function exportKeywords(location, keywords, filename) {
  const data = {
    generated: new Date().toISOString(),
    location: location,
    statistics: {
      total: keywords.length,
      highIntent: keywords.filter(k => k.intent === 'high').length,
      easyRank: keywords.filter(k => k.difficulty < 30).length,
      longTail: keywords.filter(k => k.length >= 5).length
    },
    priority: getPriorityKeywords(keywords),
    quickWins: getQuickWins(keywords),
    allKeywords: keywords
  };

  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
  console.log(`\n✅ Keywords exported to: ${filename}`);
}

/**
 * Generate keyword suggestions for page content
 */
function generateContentSuggestions(location, keywords) {
  const priority = getPriorityKeywords(keywords);

  console.log(`\n${'='.repeat(80)}`);
  console.log(`💡 CONTENT SUGGESTIONS voor ${location.name}`);
  console.log(`${'='.repeat(80)}\n`);

  console.log(`📝 H1 Suggestions (Primary Keyword):`);
  priority.slice(0, 3).forEach((kw, idx) => {
    const title = kw.keyword
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    console.log(`   ${idx + 1}. "${title}"`);
  });

  console.log(`\n📝 H2 Suggestions (Secondary Keywords):`);
  priority.slice(3, 8).forEach((kw, idx) => {
    const title = kw.keyword
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    console.log(`   ${idx + 1}. "${title}"`);
  });

  console.log(`\n📝 FAQ Suggestions (Question Keywords):`);
  keywords
    .filter(k => k.category === 'questions')
    .slice(0, 5)
    .forEach((kw, idx) => {
      const question = kw.keyword.charAt(0).toUpperCase() + kw.keyword.slice(1) + '?';
      console.log(`   ${idx + 1}. ${question}`);
    });

  console.log(`\n📝 Body Text Keywords (Natural Integration):`);
  console.log(`   Use these keywords naturally in paragraphs:\n`);
  priority.slice(0, 10).forEach(kw => {
    console.log(`   • ${kw.keyword}`);
  });
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

function main() {
  const args = process.argv.slice(2);
  let selectedCity = null;
  let exportFile = null;

  // Parse arguments
  args.forEach((arg, idx) => {
    if (arg === '--city' && args[idx + 1]) {
      selectedCity = args[idx + 1].toLowerCase();
    }
    if (arg === '--export' && args[idx + 1]) {
      exportFile = args[idx + 1];
    }
  });

  console.log(`\n🚀 StayCool Airco - Long-tail Keyword Generator\n`);

  // Filter locations
  const locations = selectedCity
    ? LOCATIONS.filter(loc => loc.name.toLowerCase() === selectedCity)
    : LOCATIONS;

  if (locations.length === 0) {
    console.error(`❌ City not found: ${selectedCity}`);
    console.log(`Available cities: ${LOCATIONS.map(l => l.name).join(', ')}`);
    process.exit(1);
  }

  // Generate keywords for each location
  locations.forEach(location => {
    const keywords = generateKeywordsForLocation(location);
    printKeywords(location, keywords);
    generateContentSuggestions(location, keywords);

    // Export if requested
    if (exportFile) {
      const filename = selectedCity
        ? exportFile
        : exportFile.replace('.json', `-${location.name.toLowerCase()}.json`);
      exportKeywords(location, keywords, filename);
    }
  });

  console.log(`\n${'='.repeat(80)}`);
  console.log(`✨ Generation Complete!`);
  console.log(`${'='.repeat(80)}\n`);

  // Usage examples
  if (!selectedCity) {
    console.log(`💡 Usage Examples:`);
    console.log(`   node scripts/generate-longtail-keywords.js --city roermond`);
    console.log(`   node scripts/generate-longtail-keywords.js --city maastricht --export keywords.json`);
    console.log(`   node scripts/generate-longtail-keywords.js --export all-keywords.json\n`);
  }
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generateKeywordsForLocation, getPriorityKeywords, getQuickWins };
