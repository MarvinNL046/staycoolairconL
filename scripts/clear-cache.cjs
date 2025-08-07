#!/usr/bin/env node

/**
 * Cache clearing utility for development
 * Helps developers clear various cache layers
 */

const fs = require('fs');
const path = require('path');

function clearCache() {
  console.log('🧹 Clearing cache...');
  
  const cachesToClear = [
    // Vite cache
    path.join(__dirname, '../node_modules/.vite'),
    // TypeScript cache
    path.join(__dirname, '../.tsbuildinfo'),
    // Build output
    path.join(__dirname, '../dist'),
    // Dev dist
    path.join(__dirname, '../dev-dist')
  ];
  
  let clearedCount = 0;
  
  cachesToClear.forEach(cachePath => {
    if (fs.existsSync(cachePath)) {
      try {
        if (fs.lstatSync(cachePath).isDirectory()) {
          fs.rmSync(cachePath, { recursive: true, force: true });
        } else {
          fs.unlinkSync(cachePath);
        }
        console.log(`✅ Cleared: ${path.basename(cachePath)}`);
        clearedCount++;
      } catch (error) {
        console.warn(`⚠️  Could not clear ${cachePath}: ${error.message}`);
      }
    } else {
      console.log(`⏭️  Skip: ${path.basename(cachePath)} (not found)`);
    }
  });
  
  console.log(`\n🎉 Cleared ${clearedCount} cache locations`);
  
  // Generate instructions for browser cache clearing
  console.log('\n📖 To clear browser cache:');
  console.log('   • Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)');
  console.log('   • Dev tools: F12 → Network tab → "Disable cache" checkbox');
  console.log('   • Service Worker: Application tab → Clear storage');
  
  console.log('\n🚀 Run "npm run build" to create fresh build');
}

clearCache();