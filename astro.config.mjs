import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://your-site-url.com',

  devToolbar: {
    enabled: false // 👈 Forma correcta de desactivarlo
  },

  integrations: [tailwind()],

});