import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png', 'robots.txt'],
      manifest: {
        name: 'StayCool Airco',
        short_name: 'StayCool',
        description: 'Specialist in airco installatie en onderhoud in Limburg',
        theme_color: '#2563eb',
        icons: [
          {
            src: '/images/logo.svg',
            sizes: '48x48 72x72 96x96 128x128 256x256',
            type: 'image/svg+xml',
            purpose: 'any'
          },
          {
            src: '/images/logo-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/images/logo-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  server: {
    port: 5173,
    strictPort: true
  }
});