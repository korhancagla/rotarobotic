import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://rotarobotik.com",
  output: "static",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    optimizeDeps: {
      // Leaflet is loaded only when the contact map approaches the viewport.
      // Keeping it out of Vite's pre-bundle avoids stale optimized URLs after HMR.
      exclude: ["leaflet"],
    },
    build: {
      cssMinify: "lightningcss",
    },
  },
});
