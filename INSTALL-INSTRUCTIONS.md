# Requirements

## NODEJS: 18

Best way to install is:

* Install nvs (node version switcher)
  * If you have winget: (`winget install nvs`)
  * Manually: <https://github.com/jasongin/nvs#windows>
* Install node version 18 with nvs (in terminal enter `nvs`)
  * `nvs`
  * Follow instructions to install node 18

## PREPARE VS CODE / EXTENSIONS

Make sure you enable and disable the extensions for this workspace according to the `.vscode/extensions.json` file!

For tooling support in VSCode, its recommended from Vue.js that you use the **Volar takeover mode**.
Unfortunately, we can not fully automate this within VSCode workspace (yet).
Please **follow the following instructions** to correctly setup your VSCode workspace:

### Volar takeover mode

It is recommended to use the volar-takeover-mode, for best developer experience:

* see [here](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode)

Basically enable / disable the following vs code extensions:

#### Enable

* `vue.volar` (Vue 3 Language Features)

#### Disable

Please make sure you disable the following vs code extensions **for this workspace only** (you might need it still for other projects), if you enabled them globally

* `vscode.typescript-language-features` (TypeScript and JavaScript Language Features)
  * you will find when searching the extensions like this: "@builtin typescript-language-features"
  * Disable it for this workspace only!

In case you developed already on Vue 2 Projects, please disable **for this workspace only**

* `octref.vetur` (Vetur: Vue tooling for Vue 2)
* `vue.vscode-typescript-vue-plugin` TypeScript Vue Plugin
