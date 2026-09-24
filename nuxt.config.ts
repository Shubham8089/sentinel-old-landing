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
      { name: 'Geist', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'Geist Mono', provider: 'google', weights: [400, 500] },
    ],
  },

  app: {
    pageTransition: { name: 'canvas', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'pactbase | proofs, not promises.',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'The consent, trust and rights layer that lives between your business and your customers. Set up in a day.',
        },
        { name: 'theme-color', content: '#FAF8F5' },
        { property: 'og:title', content: 'pactbase | proofs, not promises.' },
        {
          property: 'og:description',
          content: 'The consent, trust and rights layer that lives between your business and your customers.',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/favicon.svg' },
      ],
      script: [
        {
          // Must stay the branded custom domain -- the widget's own Trust Center
          // link (public/sdk/v1/s.js in dpdp-prod) is hardcoded to app.pactbase.in
          // regardless of where the script itself was loaded from, but this URL
          // still governs org-config/consent-record fetches and was, until now,
          // silently pointing at Vercel's internal preview alias instead of the
          // real domain.
          src: 'https://app.pactbase.in/sdk/v1/s.js',
          'data-org': 'd94c503e-f36d-48bb-b34b-8fc1413cdccb',
          async: true,
        },
        {
          innerHTML: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","ylabboacgo");`,
        },
      ],
    },
  },
})
