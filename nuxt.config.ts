// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      environment: "",
      backendUrl: "https://localhost:44313",
      appInsightsInstrumentationKey: "",
    }
  },
  typescript: {
    strict: true,
    typeCheck: true,
    shim: false
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
  imports: {
    dirs: ['stores']
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'storeToRefs',
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
})
