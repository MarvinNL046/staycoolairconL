import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'react-hot-toast', 'lucide-react'],
          forms: ['@emailjs/browser', '@stripe/react-stripe-js'],
        },
        // Optimize chunk names for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    // Disable sourcemap in production
    sourcemap: false,
    minify: 'esbuild',
    // Add CSS optimization
    cssCodeSplit: true,
    // Add target for better browser support
    target: 'es2015',
    // Add reporting for better build insights
    reportCompressedSize: true,
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
    // Add exclude patterns for better optimization
    exclude: ['@stripe/react-stripe-js'],
  },
  preview: {
    port: 4173,
    strictPort: true
  }
});
