import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxt/image',
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: '15x4 Munich - Share Your Knowledge!',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            '15x4 Munich is a volunteer-driven educational initiative featuring four 15-minute talks on any topic. Free events for curious minds in Munich.',
        },
        { property: 'og:title', content: '15x4 Munich - Share Your Knowledge!' },
        {
          property: 'og:description',
          content:
            'Free educational events with four 15-minute talks on any topic. Join us in Munich!',
        },
        { property: 'og:image', content: '/15x4_logo_munich.png' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  site: {
    url: 'https://15x4munich.de',
    name: '15x4 Munich',
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },

  routeRules: {
    '/**': { prerender: true },
  },
})
