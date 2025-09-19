// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap', '@nuxt/image-edge'],
  css: ['~/assets/css/tailwind.css'],
  site: { url: 'https://sorabit.com', name: 'Sorabit' },
  nitro: {
    prerender: { crawlLinks: true },
    routeRules: {
      // halaman “produk” bisa di-ISR 10 menit
      '/(hosting|hosting-murah|domain|cloud-vps|cdn|email-hosting|colocation|dedicated-server|ssl)': { isr: 600 },
      '/**': { headers: { 'cache-control': 'public, max-age=300, s-maxage=600, stale-while-revalidate=86400' } }
    }
  },
  image: { provider: 'ipx' }
})
