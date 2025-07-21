import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    headers: {
      'Content-Security-Policy': `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://*.googleadservices.com https://www.google.com https://connect.facebook.net;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com data: blob:;
        img-src 'self' data: blob: https:;
        font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com;
        connect-src 'self' 
          https://*.supabase.co 
          https://api.emailjs.com 
          https://*.google-analytics.com 
          https://*.analytics.google.com 
          https://*.doubleclick.net 
          https://stats.g.doubleclick.net 
          https://*.google.com 
          https://*.google.nl
          https://*.googleadservices.com
          https://*.stripe.com 
          https://api.staycoolairco.nl
          https://*.googletagmanager.com
          https://*.make.com
          https://*.leadconnectorhq.com
          https://connect.facebook.net
          https://*.facebook.com
          http://localhost:*;
        frame-src 'self' https://*.stripe.com https://*.youtube-nocookie.com https://*.googletagmanager.com;
      `.replace(/\s+/g, ' ').trim()
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          ui: ['react-hot-toast', 'lucide-react'],
          forms: ['@emailjs/browser'],
          stripe: ['@stripe/react-stripe-js'],
          // Split large components
          'lazy-components': [
            'react-lazy-load-image-component',
            'dompurify',
            'html2canvas'
          ]
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
      external: [
        'fs',
        'path',
        'url',
        'crypto',
        'stream',
        'util',
        'events',
        'http',
        'https',
        'net',
        'tls',
        'zlib',
        'os',
        'querystring',
        'buffer',
        'string_decoder',
        'async_hooks'
      ]
    },
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    sourcemap: process.env.NODE_ENV !== 'production',
    minify: 'esbuild',
    cssCodeSplit: true,
    target: 'es2015',
    reportCompressedSize: process.env.NODE_ENV === 'production',
    emptyOutDir: true,
    outDir: 'dist',
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'framer-motion',
      '@emailjs/browser',
      'react-hot-toast',
      'lucide-react'
    ],
    exclude: ['@stripe/react-stripe-js'],
  },
  preview: {
    port: 4174,
    strictPort: true,
    headers: {
      'Content-Security-Policy': `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://*.googleadservices.com https://www.google.com https://connect.facebook.net;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com data: blob:;
        img-src 'self' data: blob: https:;
        font-src 'self' data: https://fonts.gstatic.com https://fonts.googleapis.com;
        connect-src 'self' 
          https://*.supabase.co 
          https://kxjksvmlvyazphrbqglz.supabase.co 
          https://api.emailjs.com 
          https://*.google-analytics.com 
          https://*.analytics.google.com 
          https://*.doubleclick.net 
          https://stats.g.doubleclick.net 
          https://*.google.com 
          https://*.google.nl
          https://*.googleadservices.com
          https://*.stripe.com 
          https://api.staycoolairco.nl
          https://*.googletagmanager.com
          https://*.make.com
          https://*.leadconnectorhq.com
          https://connect.facebook.net
          https://*.facebook.com
          http://localhost:*;
        frame-src 'self' https://*.stripe.com https://*.youtube-nocookie.com https://*.googletagmanager.com
      `.replace(/\s+/g, ' ').trim(),
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  }
});
