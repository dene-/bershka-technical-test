export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
  ],
  devtools: {
    enabled: true,
  },
  srcDir: 'src/',
  compatibilityDate: '2025-05-15',
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        semi: true,
      },
    },
  },
});
