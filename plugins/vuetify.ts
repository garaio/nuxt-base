// plugins/vuetify.js
import type { ThemeDefinition } from "vuetify";
import { createVuetify } from "vuetify";

// vite-plugin-vuetify should now automatic load and tree-shake vuetify
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    "background": "#FFFFFF",
    "surface": "#FFFFFF",
    "primary": "#6200EE",
    "primary-darken-1": "#3700B3",
    "secondary": "#03DAC6",
    "secondary-darken-1": "#018786",
    "error": "#B00020",
    "info": "#2196F3",
    "success": "#4CAF50",
    "warning": "#FB8C00",
    "vue-green": "#42b983",
    "nuxt-green": "#00DC82",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    // components,
    // directives,
    theme: {
      defaultTheme: "myCustomLightTheme",
      themes: {
        myCustomLightTheme,
      },
    },
    defaults: {
      // Global configuration
      // global: {
      //   ripple: false
      // },
      // Per component configuration
      // VSheet: { elevation: 4},
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
