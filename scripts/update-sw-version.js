#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Generate a unique build version based on timestamp
const buildVersion = new Date().toISOString().replace(/[:.]/g, '-');

// Path to the service worker file
const swPath = path.join(__dirname, '..', 'public', 'sw.js');

// Read the service worker file
let swContent = fs.readFileSync(swPath, 'utf8');

// Replace the placeholder with the actual build version
swContent = swContent.replace('BUILD_VERSION_PLACEHOLDER', buildVersion);

// Write the updated content back
fs.writeFileSync(swPath, swContent, 'utf8');

console.log(`Service Worker updated with build version: ${buildVersion}`);

// Also create a version file for reference
const versionInfo = {
  buildVersion,
  buildTime: new Date().toISOString(),
  environment: process.env.NODE_ENV || 'development'
};

fs.writeFileSync(
  path.join(__dirname, '..', 'public', 'build-version.json'),
  JSON.stringify(versionInfo, null, 2),
  'utf8'
);