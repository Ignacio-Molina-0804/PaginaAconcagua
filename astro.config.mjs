import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://your-site-url.com',

  devToolbar: {
    enabled: false // 👈 Forma correcta de desactivarlo
  },

  integrations: [],

  vite: {
    plugins: [tailwindcss()]
  }
});