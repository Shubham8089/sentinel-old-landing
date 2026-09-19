// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@vueuse/motion/nuxt'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  fonts: {
    families: [
      { name: 'Fraunces', provider: 'google', weights: [400, 500], styles: ['normal', 'italic'] },
      { name: 'Inter', provider: 'google', weights: [400, 500, 600] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500] },
    ],
  },

  app: {
    pageTransition: { name: 'canvas', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Sentinel: the front door of DPDP',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Pass the DPDP question every client asks. Sentinel is the consent, trust and rights layer that lives on your front door, set up in a day and kept current.',
        },
        { name: 'theme-color', content: '#FAF8F3' },
        { property: 'og:title', content: 'Sentinel: the front door of DPDP' },
        {
          property: 'og:description',
          content: 'The consent, trust and rights layer that lives on your front door.',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
})
