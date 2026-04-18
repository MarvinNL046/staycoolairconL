#!/usr/bin/env node

/**
 * Generate hero images for StayCool blog posts via Gemini image API.
 * Unlike go2-* pipelines, staycool blogs are TSX components (no frontmatter),
 * so this script takes slug+title+theme as CLI args or a hardcoded list.
 *
 * Usage:
 *   node scripts/seo/generate-blog-images.mjs                       # all in POSTS list
 *   node scripts/seo/generate-blog-images.mjs --only slug1,slug2    # specific
 *   node scripts/seo/generate-blog-images.mjs --regenerate          # overwrite
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const OUTPUT_DIR = path.join(ROOT, 'public', 'images', 'blog');
const MODEL = 'gemini-3.1-flash-image-preview';
const TARGET_WIDTH = 1024;
const TARGET_HEIGHT = 576;
const DELAY_MS = 2500;

const POSTS = [
  {
    slug: 'wat-kost-1-uur-airco-draaien',
    title: 'Wat kost 1 uur airco draaien?',
    prompt: `Professional editorial photograph: a modern wall-mounted split airco unit in a tastefully decorated Dutch living room. Soft natural daylight from a large window on the left. A smart thermostat or energy meter is subtly visible in the foreground showing a power reading. Clean Scandinavian-Dutch interior aesthetic: light oak floor, neutral wall colors, minimal furniture. Mood: calm, contemporary, energy-conscious. Shot at eye level, shallow depth of field, slightly dramatic but inviting light. No people visible. The airco unit is clearly the focal point. Hyperrealistic magazine-quality photography. 16:9 horizontal composition.`,
  },
  {
    slug: 'airco-subsidie-2026-limburg',
    title: 'Airco subsidie 2026 Limburg',
    prompt: `Professional editorial photograph: organized home office desk scene with a laptop showing a blurred government-style website page, a printed checklist with hand-checked boxes, a calculator, and a small scale model of a modern white airco wall unit on a clean light wooden desk. Warm natural afternoon light from a window. Composition conveys "researching subsidies and paperwork at home". Dutch home office aesthetic: minimal, organized, professional. Color palette: warm wood tones, soft blue accents, white paper, clean whites. No readable specific text anywhere. No human faces. Hyperrealistic editorial magazine style, 16:9 horizontal composition, shallow depth of field.`,
  },
  {
    slug: 'beste-airco-merken-2026',
    title: 'Beste airco merken 2026',
    prompt: `Hyperrealistic professional photograph inside a modern showroom with three premium white split airco units mounted on separate wooden wall panels, each on its own minimalist stand. Spacious brightly-lit interior with polished concrete floor, large floor-to-ceiling windows showing blurred greenery outside. Warm natural daylight mixed with soft overhead spotlights creating subtle shadows. Camera angle: slightly low, showing the units at eye level with the floor visible. Premium boutique HVAC showroom aesthetic. Sharp detail on units, slight depth-of-field blur on background. No text, logos, or labels visible anywhere. No people. 16:9 widescreen composition. Editorial magazine photography quality.`,
  },
  {
    slug: 'airco-maastricht-complete-gids-2026',
    title: 'Airco Maastricht complete gids 2026',
    prompt: `Professional editorial photograph: iconic view of Maastricht with the Sint-Servaasbrug bridge and historic city skyline with twin cathedral towers in the background during golden hour. In the foreground, a modern Dutch home exterior shows a tastefully installed white outdoor airco unit on a brick wall (clearly visible but not the main focus). The composition conveys "modern comfort in historic Maastricht". Warm late-afternoon light, rich color palette of limestone, terracotta roofs, and Meuse river. Hyperrealistic travel magazine quality. 16:9 horizontal composition. No people visible, no signage or readable text.`,
  },
  {
    slug: 'airco-levensduur-wanneer-vervangen',
    title: 'Levensduur airco wanneer vervangen',
    prompt: `Hyperrealistic professional photograph: side-by-side comparison of an old weathered beige/cream colored split airco unit (showing signs of age, slightly yellowed plastic, small stains) next to a modern sleek pristine white airco unit on the same type of brick wall. Soft natural daylight from the side highlighting the contrast between old and new. The scene conveys "time to upgrade" subtly. Clean Dutch residential exterior context, manicured plants below. Editorial magazine quality. 16:9 horizontal composition. No text, logos, or people visible.`,
  },
  {
    slug: 'airco-storingen-herkennen',
    title: 'Airco storingen herkennen',
    prompt: `Hyperrealistic close-up photograph: a professional airco technician's gloved hand holding a multimeter/diagnostic tool against the internal components of an opened split airco unit (front panel removed, showing clean electronics and heat exchanger). Shallow depth of field. Soft industrial lighting. The scene conveys "expert diagnosis and troubleshooting". No visible face, just hands and tool. Blue-tinted professional atmosphere. 16:9 horizontal composition. No text or logos visible. Editorial technical photography style.`,
  },
  {
    slug: 'airco-offerte-maastricht',
    title: 'Airco offerte Maastricht',
    prompt: `Hyperrealistic editorial photograph: the Sint-Servaasbrug bridge in Maastricht with the city's historic skyline featuring the twin cathedral towers at golden hour. In the foreground softly blurred, a clipboard with a professional-looking printed quote document. Limestone-tan color palette mixing with warm evening light. Conveys "trustworthy local service in historic Maastricht". 16:9 widescreen. No readable text on the document, no people visible, no logos. Travel-magazine photography quality.`,
  },
  {
    slug: 'airco-offerte-heerlen',
    title: 'Airco offerte Heerlen',
    prompt: `Hyperrealistic editorial photograph: a typical Dutch 1960s-70s rijtjeshuis (row house) streetscape in Heerlen/Parkstad-Limburg with red-brick facades, tidy front gardens, and modern white airco outdoor units subtly visible on multiple houses. Warm afternoon light. Composition suggests "modern comfort in a classic Parkstad neighborhood". 16:9 widescreen. No people, no readable signage or logos. Street-photography editorial quality.`,
  },
  {
    slug: 'airco-offerte-sittard',
    title: 'Airco offerte Sittard',
    prompt: `Hyperrealistic editorial photograph: a modern Dutch 1990s-2000s twee-onder-een-kap (semi-detached house) neighborhood in Sittard with well-maintained gardens, pale-brick facades, and a clean modern airco unit installed on a side wall. Bright natural daylight. Conveys "practical Dutch suburban comfort". 16:9 widescreen. No people visible, no logos or readable text. Residential photography editorial style.`,
  },
  {
    slug: 'airco-offerte-aanvragen-checklist',
    title: 'Airco offerte checklist',
    prompt: `Hyperrealistic close-up photograph: a clean wooden desk with a printed checklist document on clipboard (with hand-drawn checkmarks visible but no readable text), a silver ballpoint pen, a small succulent plant, and a laptop partly visible. Warm natural side-lighting. Conveys "careful comparison and decision-making". 16:9 widescreen. No readable text, no people, no logos. Editorial product photography quality.`,
  },
  {
    slug: 'airco-offerte-online-vs-inmeting',
    title: 'Online offerte vs inmeting',
    prompt: `Hyperrealistic split-composition editorial photograph: left half shows a smartphone on a desk displaying a blurred website form (no readable text); right half shows a professional technician (hands only, gloved) holding a measuring tape against a wall near a window. Soft daylight bridging both halves. The split composition conveys "online vs in-person decision". 16:9 widescreen. No faces, no logos. Editorial dual-scene style.`,
  },
  {
    slug: 'waarom-verschillen-airco-offertes',
    title: 'Waarom verschillen offertes',
    prompt: `Hyperrealistic top-down flat-lay photograph: three printed quote documents of different styles side-by-side on a neutral grey surface, with different colored edges (subtle green, amber, and blue tabs suggesting price differences). A simple calculator, a pen, and a coffee mug placed between them. Moody directional lighting creating shadows. Conveys "comparison and scrutiny". 16:9 widescreen. No readable text on documents, no logos, no people. Editorial flat-lay photography.`,
  },
  {
    slug: 'multisplit-airco-offerte-wanneer-rendabel',
    title: 'Multisplit airco',
    prompt: `Hyperrealistic editorial photograph: a modern Dutch home exterior showing a single large outdoor airco unit on the wall connected to multiple refrigerant lines going to different rooms (lines subtly visible running along the facade to different window areas). Clean architecture, warm late-afternoon light. Conveys "one outdoor unit, multiple rooms served — multisplit efficiency". 16:9 widescreen. No people, no readable signage, no logos. Architectural editorial photography.`,
  },
];

function loadEnv() {
  const envPath = path.join(ROOT, '.env.local');
  if (!fs.existsSync(envPath)) return;
  const envContent = fs.readFileSync(envPath, 'utf-8');
  for (const line of envContent.split('\n')) {
    const match = line.match(/^([^#=]+)=["']?(.+?)["']?$/);
    if (match) process.env[match[1].trim()] = match[2].trim();
  }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function parseArgs() {
  const args = process.argv.slice(2);
  const getValue = flag => {
    const exact = args.indexOf(flag);
    if (exact >= 0) return args[exact + 1];
    return undefined;
  };
  return {
    dryRun: args.includes('--dry-run'),
    only: (getValue('--only') || '').split(',').map(s => s.trim()).filter(Boolean),
    regenerate: args.includes('--regenerate'),
  };
}

async function generateImage(prompt, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ['IMAGE'] },
    }),
  });
  if (!response.ok) throw new Error(`Gemini ${response.status}: ${await response.text()}`);
  const data = await response.json();
  const parts = data.candidates?.[0]?.content?.parts || [];
  const imagePart = parts.find(p => p.inlineData || p.inline_data);
  const inline = imagePart?.inlineData || imagePart?.inline_data;
  if (!inline?.data) throw new Error('No image returned');
  return Buffer.from(inline.data, 'base64');
}

async function processAndSave(buffer, outputPath) {
  await sharp(buffer)
    .resize(TARGET_WIDTH, TARGET_HEIGHT, { fit: 'cover' })
    .webp({ quality: 82 })
    .toFile(outputPath);
}

async function main() {
  loadEnv();
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('GEMINI_API_KEY not found in .env.local');

  const options = parseArgs();
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  let posts = POSTS;
  if (options.only.length) {
    const onlySet = new Set(options.only);
    posts = posts.filter(p => onlySet.has(p.slug));
  }
  if (!options.regenerate) {
    posts = posts.filter(p => !fs.existsSync(path.join(OUTPUT_DIR, `${p.slug}.webp`)));
  }

  console.log(`[gen-images] ${posts.length} post(s) to generate${options.dryRun ? ' (dry-run)' : ''}`);
  for (const p of posts) console.log(`  - ${p.slug}: ${p.title}`);
  if (options.dryRun || posts.length === 0) return;

  let success = 0, fail = 0;
  for (const post of posts) {
    const outputPath = path.join(OUTPUT_DIR, `${post.slug}.webp`);
    process.stdout.write(`  generating ${post.slug} ... `);
    try {
      const buffer = await generateImage(post.prompt, apiKey);
      await processAndSave(buffer, outputPath);
      console.log(`OK (${(fs.statSync(outputPath).size / 1024).toFixed(0)} KB)`);
      success++;
    } catch (e) {
      console.log(`FAIL: ${e.message}`);
      fail++;
    }
    await sleep(DELAY_MS);
  }
  console.log(`\nDone. ${success} succeeded, ${fail} failed.`);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
