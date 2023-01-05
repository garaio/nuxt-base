# TODOs

## Prio cases

* i18n
  * json -> DONE
  * resx ?
  * processing
* prettier ?
* eslint ?

## Backend changes needed

* Runtime config (BACKEND) (frontend done)
  * Instead of creating a json file, it would be perfect to have a env file
  * Nuxt will automatically replace config with env content during runtime
  * <https://nuxt.com/docs/guide/going-further/runtime-config>

## Later

* vue use example (composable)
* jest ? or vitest ?
* vuetify
* pwa
* nuxt extends : <https://www.youtube.com/watch?v=HvTui3P0w-o>

## Other external topics / migration / improvements

* mixins -> how to solve message mixin within nuxt -> plugin?
* resx2ts -> translations directly into the file instead of requiring a request

## Deveoper Experience / VSCode

We might want to invest some time to develop:

* Commented idea on github issue
* Create a Extension that checks for extension which should be disabled according to "unwantedRecommendations".
  * similar to <https://github.com/muzaisimao/vscode-disable-extensions>
* Create devcontainer with docker to have a base setup running.
  * <https://code.visualstudio.com/docs/devcontainers/containers>
