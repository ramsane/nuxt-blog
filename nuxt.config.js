import getRoutes from './utils/getRoutes'

// get the default meta tag.
import getSiteMeta from './utils/getSiteMeta'
const meta = getSiteMeta()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en-GB',
    },
    title: 'Ramana Reddy Sane | Portfolio',
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A simple portfolio that has few blogs that explains the concepts and ideas from various fields like MachineLearning, Deeplearning, Software Development, Frontend.',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: '@ramansane' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'msapplication-TileColor', content: '#3a3a3a' },
      { name: 'theme-color', content: '#3a3a3a' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#3a3a3a' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: process.env.BASE_URL || 'https://ramsane.github.io',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    'node_modules/lite-youtube-embed/src/lite-yt-embed.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/typeface.js', '~/plugins/youtube.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://image.nuxtjs.org/getting-started/installation
    ['@nuxt/image'],
    // https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',
  ],

  svgSprite: {
    input: '~/assets/svg/',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false,
    markdown: {
      prism: {
        // theme: 'prismjs/themes/prism-twilight.css',
        theme: 'prism-themes/themes/prism-coldark-dark.css',
      },
      remarkPlugins: ['remark-math'],
      rehypePlugins: ['rehype-katex'],
    },
  },

  // nuxt image
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
    presets: {
      post: {
        modifiers: {
          sizes: 'xs:320px md:768px',
        },
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'typeface-roboto',
      'typeface-nova-square',
      'typeface-nova-round',
      'typeface-nova-flat',
    ],
  },

  sitemap: {
    hostname: process.env.BASE_URL || 'https://ramsane.github.io',
    routes() {
      return getRoutes()
    },
  },

  loading: {
    color: '#FF5722',
    height: '4px',
    continuous: true,
  },
}
