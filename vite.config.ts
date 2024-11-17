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
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    target: 'es2015',
    minify: 'esbuild',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000
  },
  server: {
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'text/javascript'
    }
  },
  preview: {
    port: 4173,
    strictPort: true,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'text/javascript'
    }
  }
});