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
    [
      '@nuxtjs/i18n',
      {
        legacy: false,
        globalInjection: true,
        strategy: 'prefix_and_default',
        defaultLocale: 'de',
        lazy: true,
        langDir: "languages",
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            file: 'en-US.json'
          },
          {
            code: 'de',
            iso: 'de-CH',
            file: 'de-CH.json'
          },
          {
            code: 'fr',
            iso: 'fr-CH',
            file: 'fr-CH.json'
          },
          {
            code: 'it',
            iso: 'it-CH',
            file: 'it-CH.json'
          }
        ],
        vueI18n: {
          fallbackLocale: 'en',
            availableLocales: ['en', 'de', 'fr', 'it'],
          // messages: {
          //   en: {
          //     welcome: 'Welcome',
          //     car: 'car | cars',
          //     apple: 'no apples | one apple | {count} apples',
          //     banana: 'no bananas | {n} banana | {n} bananas'
          //   }
          // }
        }
      }
    ]
  ],
})
