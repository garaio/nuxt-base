# Knowhow Vue 3 + Nuxt 3

Notes for important topics what is new or did change with Vue 3 + Nuxt 3.

## Vue 3

New important / improved changes since Vue 2:

### Basics

* reactivity
  * Vue: ref() (reactivity stuff)
  * Nuxt: 
* modularize code ! (use)
* API calls from within setup() not from created() anymore (it the same)
* watchEffect(), watch()
* Suspense
* compiler macros: (script setup only)
  * defineProps
  * withDefaults (needed in next?)
  * defineEmits

### Advanced features

* onRenderTracked()
* onRenderTriggered()

### additional features

* new v-model binding
* multiple v-model bindings
* v-model modifiers
* The new $attrs (including listeners)
* Multi root components
  * clarify if this is usable with Nuxt 3!
  * needs $attrs binding to know where to inherit to
  * needs emits set in options

## NUXT 3

* 📘 [Nuxt 3 Documentation](https://nuxt.com/docs)

### Default setup

Our goal is to re-use as good as possible **the default settings and setup of Nuxt 3**, using best practices as documented. Keeping us aligned with key concepts and directory structure as well as already written documentations.

However having an own blueprint / boilerplate mostly means at least some little custom changes, but always with improving the experience, maintainability or quality in mind:

* Enabled build-time type checking (+ development): [see documentation](https://nuxt.com/docs/api/configuration/nuxt-config#typecheck)
* scss files are in the `/scss/` folder and not in `/assets/styles`.

### Modules / extensions

Nuxt is the base, there are modules to extend the power of Nuxt 3.
i18n for example is implemented over the Nuxt Module `@nuxtjs/i18n`.

They basically implement the modules available for Vue 3, including all the functionality.
The implementation however is mostly simpler with Nuxt 3 than with Vue 3.

----

#### **i18n** (@nuxtjs/i18n)

This is responsible for translating strings

* 📘 [i18n Documentation for v8 (Nuxt 3)](https://v8.i18n.nuxtjs.org/)

In combination with the VSCode extension [**i18n Ally** (lokalise.i18n-ally)](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally), the translation process and overview is really easy.
The tool will help you find string to translate, manage the JSON files and load missing translations if wanted. No need to handle these files manually.

* 🔗 [VSCode **i18n Ally extension** on marketplace](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally)

----

#### **Pinia / state management** (@pinia/nuxt)

* 📘 [Pinia Documentation](https://pinia.vuejs.org/)
