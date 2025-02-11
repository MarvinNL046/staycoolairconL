
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createClient } from '@supabase/supabase-js';
import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.VITE_ANTHROPIC_API_KEY,
});

// Read and parse the CSV file
const csvFilePath = join(__dirname, '..', 'public', 'service-areas.csv');
const csvContent = fs.readFileSync(csvFilePath, 'utf-8');
const cities = parse(csvContent, {
  columns: true,
  skip_empty_lines: true
});

console.log(`Loaded ${cities.length} cities from CSV file`);

async function generateContent(city, region, postalCodes, population) {
  const prompt = `
IMPORTANT: Respond ONLY with a valid JSON object. Do not include any other text before or after the JSON.

Generate comprehensive, SEO-optimized content about air conditioning installation in ${city}, a city in ${region}, Netherlands. Use this data:
- Population: ${population}
- Postal codes: ${postalCodes}

Key Requirements:
1. Write in Dutch at a 7-year-old's comprehension level
2. Avoid marketing language or "clever" phrases
3. Demonstrate expert knowledge with practical tips and real-world examples
4. Break down complex information into bullet points and tables
5. Include internal links to relevant pages on staycoolairco.nl
6. Structure content with detailed sections

The content should follow E-E-A-T principles:
- Experience: Include practical tips and real-world scenarios specific to ${city}
- Expertise: Demonstrate technical knowledge about air conditioning
- Authoritativeness: Reference industry standards and best practices
- Trustworthiness: Provide accurate, helpful information without marketing hype

Format the response as a JSON object with these exact fields:
{
  "city": "${city}",
  "region": "${region}",
  "postal_codes": "${postalCodes}",
  "population": ${population},
  "content": {
    "keyTakeaways": [
      "Key point about airco in ${city}...",
      "Another important point..."
    ],
    "intro": "Brief city introduction and airco relevance...",
    "climate": {
      "description": "Detailed climate analysis for ${city}...",
      "challenges": [
        "Specific cooling challenge in ${city}...",
        "Another local challenge..."
      ]
    },
    "aircoInfo": {
      "benefits": "Location-specific benefits for ${city} residents...",
      "recommendations": "Tailored recommendations for ${city} homes..."
    },
    "sections": [
      {
        "title": "Section title...",
        "content": "300-500 words of content...",
        "internalLinks": [
          {
            "text": "Anchor text...",
            "url": "https://staycoolairco.nl/relevant-page"
          }
        ],
        "bulletPoints": [
          "Important point about airco in ${city}...",
          "Another relevant point..."
        ]
      }
    ],
    "expertTips": [
      {
        "tip": "Expert tip title specific to ${city}...",
        "explanation": "Detailed explanation..."
      }
    ],
    "serviceAreas": [
      "${city} centrum",
      "Surrounding neighborhoods..."
    ],
    "faq": [
      {
        "question": "Common question about airco in ${city}...",
        "answer": "Clear, informative answer..."
      }
    ]
  },
  "seo": {
    "title": "Airco Installatie ${city} | Specialist in ${region} | StayCool Airco",
    "description": "Professionele airco installatie in ${city}. Erkend installateur, persoonlijk advies, en uitstekende service in heel ${region}. ✓ Gratis offerte ✓ 24/7 service",
    "keywords": [
      "airco ${city}",
      "airconditioning ${city}",
      "airco installatie ${city}",
      "airco montage ${city}",
      "${region} airco specialist"
    ],
    "internalLinks": [
      {
        "text": "Anchor text...",
        "url": "https://staycoolairco.nl/relevant-page"
      }
    ]
  }
}

Make sure the content is natural, informative, and optimized for SEO while maintaining readability.

NOTE: The system will automatically add metadata including 'written_by' and 'last_updated' fields. Do not include these in your response.`;

  try {
    console.log(`Generating content for ${city}...`);
    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 4000,
      messages: [{ role: "user", content: prompt }]
    });

    let responseContent = response.content[0].type === 'text' 
      ? response.content[0].text 
      : '';

    // Extract JSON if there's any extra text
    const jsonStart = responseContent.indexOf('{');
    const jsonEnd = responseContent.lastIndexOf('}') + 1;
    if (jsonStart >= 0 && jsonEnd > jsonStart) {
      responseContent = responseContent.slice(jsonStart, jsonEnd);
    }

    // Parse and validate the JSON
    let content;
    try {
      content = JSON.parse(responseContent);
      
      // Validate required fields
      const required = ['city', 'region', 'postal_codes', 'population', 'content', 'seo'];
      for (const field of required) {
        if (!content[field]) {
          throw new Error(`Missing required field: ${field}`);
        }
      }

      // Add metadata and ensure all required arrays exist
      const timestamp = new Date().toISOString();
      content.metadata = {
        written_by: 'StayCool Team',
        last_updated: timestamp
      };
      content.last_updated = timestamp;

      // Ensure all required arrays exist
      content.content.keyTakeaways = content.content.keyTakeaways || [];
      content.content.climate = content.content.climate || {};
      content.content.climate.challenges = content.content.climate.challenges || [];
      content.content.sections = content.content.sections || [];
      content.content.expertTips = content.content.expertTips || [];
      content.content.faq = content.content.faq || [];
      content.content.serviceAreas = content.content.serviceAreas || [];
      content.seo.keywords = content.seo.keywords || [];
      content.seo.internalLinks = content.seo.internalLinks || [];

    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      console.error('Raw response:', responseContent);
      throw new Error(`Failed to parse content: ${parseError.message}`);
    }

    console.log(`Saving content for ${city} to database...`);
    const { data, error } = await supabase
      .from('location_content')
      .insert([content])
      .select()
      .single();

    if (error) {
      if (error.code === '23505') { // Unique constraint violation
        console.log(`Content for ${city} already exists, skipping...`);
        return;
      }
      throw error;
    }

    console.log(`Content saved successfully for ${city}`);
    return data;
  } catch (error) {
    console.error(`Error processing ${city}:`, error);
    throw error;
  }
}

// Process all cities
async function processAllCities() {
  let processed = 0;
  let skipped = 0;
  let failed = 0;

  for (const city of cities) {
    try {
      console.log(`Processing ${city.city} (${processed + 1}/${cities.length})...`);
      
      // Check if content already exists
      const { data: existing } = await supabase
        .from('location_content')
        .select('city')
        .eq('city', city.city)
        .single();

      if (existing) {
        console.log(`Content for ${city.city} already exists, skipping...`);
        skipped++;
        continue;
      }

      await generateContent(
        city.city,
        city.region,
        city.postal_codes,
        parseInt(city.population)
      );
      
      processed++;
      console.log(`Progress: ${processed} processed, ${skipped} skipped, ${failed} failed`);
      
      // Add a delay between requests to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(`Failed to process ${city.city}:`, error);
      failed++;
      // Continue with next city even if one fails
      continue;
    }
  }

  console.log('\nFinal Summary:');
  console.log(`Total cities: ${cities.length}`);
  console.log(`Successfully processed: ${processed}`);
  console.log(`Skipped (already existed): ${skipped}`);
  console.log(`Failed: ${failed}`);
}

// Run the script
processAllCities()
  .then(() => {
    console.log('All cities processed');
    process.exit(0);
  })
  .catch(error => {
    console.error('Script failed:', error);
    process.exit(1);
  });
