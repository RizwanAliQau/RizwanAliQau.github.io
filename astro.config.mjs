import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rizwanaliqau.github.io',
  base: '/',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false })],
});
