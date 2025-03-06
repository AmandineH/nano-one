// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["./assets/css/style.css"],
  modules: ["nuxt-viewport", "@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxt/fonts", "@nuxt/content"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true }
});
