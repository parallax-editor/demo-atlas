// Showcase del preset `linked-home`: `/` es un sitio editable (slug `home`)
// que enlaza mundos (`/<slug>`) con cross-fade in-engine. Todo el andamiaje
// (scan de content/, prerender, rutas de assets, fonts SSR, OG, sitemap,
// 200.html) lo pone el módulo Nuxt del engine.
export default defineNuxtConfig({
  modules: [
    '@parallax-editor/parallax-engine/nuxt',
    '@nuxtjs/google-fonts',
  ],

  parallax: {
    preset: 'linked-home',
    siteUrl: process.env.SITE_URL || 'https://parallax-editor.github.io/demo-atlas',
  },

  googleFonts: {
    families: {
      'Cormorant Garamond': [400, 500, 600],
      'Inter': [300, 400, 500],
    },
    display: 'swap',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es' },
    },
  },

  compatibilityDate: '2024-07-01',
})
