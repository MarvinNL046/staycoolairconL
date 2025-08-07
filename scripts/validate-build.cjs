#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Post-build validation script to prevent cache issues
 * Validates HTML references match actual built files
 */

function validateBuild() {
  console.log('🔍 Validating build for cache consistency...');
  
  const distPath = path.join(__dirname, '../dist');
  const indexPath = path.join(distPath, 'index.html');
  const assetsPath = path.join(distPath, 'assets');
  
  if (!fs.existsSync(indexPath)) {
    throw new Error('❌ index.html not found in dist/');
  }
  
  if (!fs.existsSync(assetsPath)) {
    throw new Error('❌ assets/ directory not found in dist/');
  }
  
  // Read HTML content
  const htmlContent = fs.readFileSync(indexPath, 'utf8');
  
  // Extract referenced JS/CSS files from HTML
  const jsRefs = [...htmlContent.matchAll(/src="\/assets\/([^"]+\.js)"/g)];
  const cssRefs = [...htmlContent.matchAll(/href="\/assets\/([^"]+\.css)"/g)];
  
  // Get actual files in assets directory
  const actualFiles = fs.readdirSync(assetsPath);
  const actualJs = actualFiles.filter(f => f.endsWith('.js'));
  const actualCss = actualFiles.filter(f => f.endsWith('.css'));
  
  console.log(`📄 HTML references ${jsRefs.length} JS files, ${cssRefs.length} CSS files`);
  console.log(`📁 Assets directory contains ${actualJs.length} JS files, ${actualCss.length} CSS files`);
  
  // Validate JS references
  for (const [, filename] of jsRefs) {
    if (!actualFiles.includes(filename)) {
      throw new Error(`❌ Referenced JS file not found: ${filename}`);
    }
    console.log(`✅ JS file exists: ${filename}`);
  }
  
  // Validate CSS references
  for (const [, filename] of cssRefs) {
    if (!actualFiles.includes(filename)) {
      throw new Error(`❌ Referenced CSS file not found: ${filename}`);
    }
    console.log(`✅ CSS file exists: ${filename}`);
  }
  
  // Check for unreferenced files
  const referencedJs = jsRefs.map(([, filename]) => filename);
  const referencedCss = cssRefs.map(([, filename]) => filename);
  
  const unreferencedJs = actualJs.filter(f => !referencedJs.includes(f));
  const unreferencedCss = actualCss.filter(f => !referencedCss.includes(f));
  
  if (unreferencedJs.length > 0) {
    console.warn(`⚠️  Unreferenced JS files: ${unreferencedJs.join(', ')}`);
  }
  
  if (unreferencedCss.length > 0) {
    console.warn(`⚠️  Unreferenced CSS files: ${unreferencedCss.join(', ')}`);
  }
  
  console.log('✅ Build validation passed - no cache issues detected');
  
  // Generate cache manifest for service worker
  generateCacheManifest(actualFiles);
}

function generateCacheManifest(files) {
  const manifest = {
    buildTime: new Date().toISOString(),
    buildVersion: new Date().getTime(),
    assets: files.map(file => `/assets/${file}`)
  };
  
  const manifestPath = path.join(__dirname, '../dist/cache-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  
  console.log('📦 Cache manifest generated');
}

// Run validation
try {
  validateBuild();
  process.exit(0);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}