# Knowhow Vue 3 + Nuxt 3

Notes for important topics what is new or did change with Vue 3 or Nuxt 3.

## Vue 3

New important / improved changes since Vue 2:

### Basics

* ref() (reactivity stuff)
* reactive
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

Documentation is absolutely great, check out: <https://nuxt.com/docs>

### Default setup

Our goal is to re-use the default settings and setup of Nuxt 3, using best practices as documented. Keeping us aligned with key concepts and directory structure.

However here and there might be a little change, hopefully as an improvement:

* Enabled build-time type checking (+ development): [see documentation](https://nuxt.com/docs/api/configuration/nuxt-config#typecheck)
* scss files are in the `/scss/` folder and not in `/assets/styles`.
