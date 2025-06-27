import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-site-url.com',
  devToolbar: {
    enabled: false // 👈 Forma correcta de desactivarlo
  },
  integrations: []
});