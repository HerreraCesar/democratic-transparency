import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// TODO: usar ssr
// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
