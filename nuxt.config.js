const BASE_URL = process.env.BACKEND ?? 'http://localhost:2000';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'e-podiya',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap' },
      { rel: 'stylesheet', href: '/vendor/unicons-2.0.1/css/unicons.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/responsive.css' },
      { rel: 'stylesheet', href: '/css/night-mode.css' },

      { rel: 'stylesheet', href: '/vendor/fontawesome-free/css/all.min.css' },
      { rel: 'stylesheet', href: '/vendor/OwlCarousel/assets/owl.carousel.css' },
      { rel: 'stylesheet', href: '/vendor/OwlCarousel/assets/owl.theme.default.min.css' },
      { rel: 'stylesheet', href: '/vendor/bootstrap/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/vendor/bootstrap-select/dist/css/bootstrap-select.min.css' },
      { rel: 'stylesheet', href: '/vendor/bootstrap-select/dist/css/bootstrap-select.min.css' },
    ],
    bodyAttrs: {
      // class: 'd-flex flex-column h-100'
    },
    script: []
  },



  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/element.js',
    { src: '~plugins/map.js', ssr: false },
    { src: '~plugins/vue2-editor.js', ssr: false },
    '~plugins/veeValidate.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/builder',
    '~/components/app/events',
    '~/components/ui/form',
    '~/components/ui/form/symfony',
    '~/components/ui/form/blocks',
    '~/components/ui/form/layouts',
    '~/components/ui/layout',
    '~/components/ui/section',
    '~/components/ui/steps',
    '~/components/ui/grid',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'vue2-editor/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'nuxt-leaflet',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Add exception
    transpile: [
      "vee-validate/dist/rules"
    ],
  },
  mode: "universal",
  axios: {
    baseURL: process.env.BACKEND ?? 'http://localhost:3000/api',
  },

  proxy: [
    'http://localhost:2000/api',
    'http://localhost:2000/uploads',
  ]
}
