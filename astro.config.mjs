import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

// Forzamos a Astro a leer tu archivo personalizado
export default defineConfig({
  output: 'server',
  adapter: netlify(),
});
