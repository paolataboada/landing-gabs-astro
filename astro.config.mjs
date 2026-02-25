// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@components': path.resolve('./src/components'),
        '@assets': path.resolve('./src/assets'),
        '@images': path.resolve('./src/assets/images'),
        '@logos': path.resolve('./src/assets/images/logos'),
        '@icons': path.resolve('./src/assets/icons'),
        '@data': path.resolve('./src/data'),
        '@ui': path.resolve('./src/components/ui'),
        '@buttons': path.resolve('./src/components/buttons'),
      },
    },
  },
});