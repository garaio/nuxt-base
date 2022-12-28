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

### Volar takeover mode

It is recommended to use the volar-takeover-mode, for best developer experience:

* see [here](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode)

Basically enable / disable the following vs code extensions:

#### Enable

* `Vue.volar`

#### Disable

* `octref.vetur`
* `Vue.vscode-typescript-vue-plugin`
* `vscode.typescript-language-features`
