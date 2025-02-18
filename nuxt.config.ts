// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: "light",
  },
  css: ["./assets/css/style.css"],
  modules: ["nuxt-viewport", "@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxt/fonts"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
