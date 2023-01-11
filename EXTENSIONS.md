
# EXTENSIONS

For tooling support in VSCode, its recommended from Vue.js that you use the **Volar takeover mode**.  
This basically means to enable and disable some specific extensions:

## Unwanted recommendations

Use our [Unwanted recommendations](https://marketplace.visualstudio.com/items?itemName=GARAIOAG.garaio-vscode-unwanted-recommendations)-extension, which will report you any unwanted extensions for the workspace, directly within VSCode. This should help you to disable the unwanted extensions.

*Unfortunately, its not yet possible to automate this with VSCode (yet).*

> For more details, or manually disable the extensions, read the following documentation:

## Volar: takeover mode

It [is recommended](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode) to use the volar-takeover-mode, for best developer experience.
Basically enable / disable the following vs code extensions:

### **Install / Enable**

* [**Volar** Vue 3 Language Features (`Vue.volar`)](<https://marketplace.visualstudio.com/items?itemName=Vue.volar>)  is the suggested tooling for Vue 3

### **Disable**

Please make sure you disable the following vs code extensions **for this workspace only** (you might need it still for other projects), if you enabled them globally

* `vscode.typescript-language-features` (TypeScript and JavaScript Language Features)
  * You will find the extensions within *vscode-extensions* when searching for: `@builtin typescript-language-features`
  * Disable it for this workspace only

* [**Vetur** (`octref.vetur`)](https://marketplace.visualstudio.com/items?itemName=octref.vetur) is the suggested tooling for Vue 2  
  In case you developed already on Vue 2 Projects, please disable **for this workspace only**

* `vue.vscode-typescript-vue-plugin` TypeScript Vue Plugin *(if installed)*
