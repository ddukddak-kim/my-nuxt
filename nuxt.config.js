import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  head: {
    titleTemplate: '%s - y',
    title: 'y',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [],
  plugins: ['~plugins/etc'],
  components: true,
  buildModules: ['@nuxtjs/vuetify'],
  modules: ['@nuxtjs/axios', 'vuetify-dialog/nuxt'],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
    }
  },
  vuetifyDialog: {
    property: '$dialog',
    confirm: {}
  },
  build: {
  },
  serverMiddleware: [
    { path: '/api', handler: '~/api/index.js' },
  ]
}
