// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/scss/_importIntoComponents.scss" as *;'
        }
      }
    }
  },
  app: {
    // We add some page and layout transitions per default
    // The animations can be found in the "_animation.scss" file
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
})
