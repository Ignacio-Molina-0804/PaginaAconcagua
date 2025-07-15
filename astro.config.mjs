import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://your-site-url.com",

  devToolbar: {
    enabled: false, // 👈 Forma correcta de desactivarlo
  },

  integrations: [tailwind()],

  i18n: {
    defaultLocale: "es", // Idioma por defecto del sitio
    locales: ["es", "en", "pt"], // Idiomas soportados

    routing: {
      // PrefixDefaultLocale: true = siempre muestra el idioma en la URL
      // Ej: /es/inicio en lugar de /inicio para el idioma default
      // prefixDefaultLocale: true,

      // RedirectToDefaultLocale (comentado)
      // Si true, redirige / → /es cuando el default es 'es'
      redirectToDefaultLocale: true,
    },
  },
});
