import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

export default defineConfig({
  integrations: [mdx(), sitemap(), react(), compress()],
  compressHTML: true,
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    assetsPrefix: '.',
  },
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