import { LocationContent } from '../types/location';
import { Anthropic } from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
});

export async function generateContent(
  city: string,
  region: string,
  population: number,
  postalCodes: string
): Promise<LocationContent> {
const prompt = `
Generate comprehensive, SEO-optimized content about air conditioning installation in ${city}, a city in ${region}, Netherlands. Use this data:
- Population: ${population}
- Postal codes: ${postalCodes}

Key Requirements:
1. Write in Dutch at a 7-year-old's comprehension level
2. Avoid marketing language or "clever" phrases
3. Demonstrate expert knowledge with practical tips and real-world examples
4. Break down complex information into bullet points and tables
5. Include internal links to relevant pages on staycoolairco.nl
6. Structure content with 12 detailed sections (300-500 words each)

The content should follow E-E-A-T principles:
- Experience: Include practical tips and real-world scenarios
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
      "Key point 1...",
      "Key point 2..."
    ],
    "intro": "Brief city introduction...",
    "climate": {
      "description": "Climate details...",
      "challenges": ["Challenge 1...", "Challenge 2..."]
    },
    "aircoInfo": {
      "benefits": "Location-specific benefits...",
      "recommendations": "Tailored recommendations..."
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
        "images": [
          {
            "url": "Image URL...",
            "alt": "Alt text..."
          }
        ],
        "bulletPoints": ["Point 1...", "Point 2..."],
        "table": {
          "headers": ["Column 1", "Column 2"],
          "rows": [
            ["Row 1 Col 1", "Row 1 Col 2"],
            ["Row 2 Col 1", "Row 2 Col 2"]
          ]
        }
      }
    ],
    "expertTips": [
      {
        "tip": "Expert tip title...",
        "explanation": "Detailed explanation..."
      }
    ],
    "serviceAreas": ["Area 1...", "Area 2..."],
    "faq": [
      {
        "question": "Common question...",
        "answer": "Clear answer..."
      }
    ]
  },
  "seo": {
    "title": "Airco Installatie ${city} | StayCool Airco",
    "description": "SEO description...",
    "keywords": ["keyword 1...", "keyword 2..."],
    "internalLinks": [
      {
        "text": "Anchor text...",
        "url": "https://staycoolairco.nl/relevant-page"
      }
    ]
  }
}

Ensure the content:
1. Is natural and informative
2. Uses simple language a child could understand
3. Demonstrates real expertise without being overly technical
4. Includes practical examples and specific recommendations
5. Links to relevant internal pages (products, knowledge base)
6. Breaks down complex topics into simple bullet points or tables`;

  try {
    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 4000,
      messages: [{ role: "user", content: prompt }]
    });

    const responseContent = response.content[0].type === 'text' 
      ? response.content[0].text 
      : '';

    const content = JSON.parse(responseContent) as LocationContent;
    return content;
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
}
