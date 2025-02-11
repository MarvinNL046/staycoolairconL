import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Copy .env file to dist directory
const envPath = path.join(rootDir, '.env');
const distEnvPath = path.join(rootDir, 'dist', '.env');

// Create dist directory if it doesn't exist
if (!fs.existsSync(path.join(rootDir, 'dist'))) {
  fs.mkdirSync(path.join(rootDir, 'dist'));
}

// Copy .env file
fs.copyFileSync(envPath, distEnvPath);

// Start server
import('../dist/server/server/server.js');
