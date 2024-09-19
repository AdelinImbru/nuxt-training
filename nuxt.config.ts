// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxt/image",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  content: {
    highlight: {
      theme: {
        default: "min-light",
        dark: "min-dark",
      },
    },
  },
  colorMode: {
    classSufix: "",
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
});
