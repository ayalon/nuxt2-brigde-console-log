import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt2',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // PHPStorm support
    ['nuxt-storm', { nested: true }],
    // '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '~/modules/simple',
    // '~/plugins/simple',
    // '~/modules/nuxt-graphql-middleware',
    'nuxt-graphql-middleware',
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-property-decorator'],
  },

  bridge: {
    vite: false,
  },

  typescript: {
    strict: true,
  },

  graphqlMiddleware: {
    // Example: https://studio.apollographql.com/sandbox/explorer
    graphqlServer: `https://swapi-graphql.netlify.app/.netlify/functions/index`,
    queries: {
      film: '~/pages/film/film.graphql',
      filmList: '~/pages/list/filmlist.graphql',
    },
    mutations: {},
    plugin: {
      enabled: true,
      cacheInServer: false,
      cacheInBrowser: true,
    },
    debug: true,
    outputPath: './graphql_queries',
    typescript: {
      enabled: true,
      resolvedQueriesPath: '~/graphql_queries',
      schemaOutputPath: './schema',
      typesOutputPath: '~/types',
      schemaOptions: {},
      skipSchemaDownload: process.env.NODE_ENV === 'production',
    },
  },
})
