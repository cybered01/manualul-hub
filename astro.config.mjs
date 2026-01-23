// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: Google are nevoie de acest URL pentru a genera corect harta site-ului
  // După ce cumperi domeniul .ro, vei schimba aici cu https://manualul.ro
  site: 'https://manualul.ro',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});