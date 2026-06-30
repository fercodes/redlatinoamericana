import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import dotenv from 'dotenv';

// Forzamos a Astro a leer tu archivo personalizado
dotenv.config({ path: 'env.txt' });

export default defineConfig({
  output: 'server',
  adapter: netlify(),
});