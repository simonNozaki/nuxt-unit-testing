// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  components: {
    dirs: [{ path: '~/components', pathPrefix: false }],
    global: true,
  },
  modules: ['@nuxt/test-utils/module'],
  testUtils: {}
})
