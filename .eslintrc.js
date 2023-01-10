// Based on https://antfu.me/posts/why-not-prettier
// https://github.com/antfu/eslint-config
process.env.ESLINT_TSCONFIG = "tsconfig.json";

module.exports = {
  extends: "@antfu",
  rules: {
    // GARAIO RULES
    // TODO: we could make our own eslint settings extension to extend from
    //
    // Line max length: I don't think a warning or error has any benefits here
    // "max-len": ["off", { code: 120 }],
    // Force double Quotes
    "quotes": "off",
    "@typescript-eslint/quotes": ["warn", "double"],
    // Force curly braces
    "curly": ["warn", "all"],
    // Force semicolons
    "semi": "off",
    "@typescript-eslint/semi": ["warn", "always"],
    // Set closing bracket
    "vue/html-closing-bracket-newline": ["error", {
      singleline: "never",
      multiline: "always",
    }],
    // Set self closing
    "vue/html-self-closing": ["error", {
      html: {
        void: "never",
        normal: "always",
        component: "always",
      },
      svg: "any",
      math: "always",
    }],
    // Set attributes handling
    "vue/first-attribute-linebreak": ["error", {
      singleline: "beside",
      multiline: "below",
    }],
    "vue/max-attributes-per-line": ["error", {
      singleline: {
        max: 10, // Not yet sure, how many attributes really make sense on 1 line
      },
      multiline: {
        max: 1,
      },
    }],

    // @antfu rules:
    // Already in the extends, but it makes it easier to check the rules in here:
    // "vue/max-attributes-per-line": "off",
    "vue/no-v-html": "off",
    "vue/require-prop-types": "off",
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",
    "vue/prefer-import-from-vue": "off",

    // reactivity transform
    "vue/no-setup-props-destructure": "off",

    "vue/component-tags-order": ["error", {
      order: ["script", "template", "style"],
    }],
    "vue/block-tag-newline": ["error", {
      singleline: "always",
      multiline: "always",
    }],
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/component-options-name-casing": ["error", "PascalCase"],
    "vue/custom-event-name-casing": ["error", "camelCase"],
    "vue/define-macros-order": ["error", {
      order: ["defineProps", "defineEmits"],
    }],
    "vue/html-comment-content-spacing": ["error", "always", {
      exceptions: ["-"],
    }],
    "vue/no-restricted-v-bind": ["error", "/^v-/"],
    "vue/no-useless-v-bind": "error",
    "vue/no-v-text-v-html-on-component": "error",
    "vue/padding-line-between-blocks": ["error", "always"],
    "vue/prefer-separate-static-class": "error",

    // extensions
    "vue/array-bracket-spacing": ["error", "never"],
    "vue/arrow-spacing": ["error", { before: true, after: true }],
    "vue/block-spacing": ["error", "always"],
    "vue/brace-style": ["error", "stroustrup", { allowSingleLine: true }],
    "vue/comma-dangle": ["error", "always-multiline"],
    "vue/comma-spacing": ["error", { before: false, after: true }],
    "vue/comma-style": ["error", "last"],
    "vue/dot-location": ["error", "property"],
    "vue/dot-notation": ["error", { allowKeywords: true }],
    "vue/eqeqeq": ["error", "smart"],
    // 'vue/func-call-spacing': ['off', 'never'],
    "vue/key-spacing": ["error", { beforeColon: false, afterColon: true }],
    "vue/keyword-spacing": ["error", { before: true, after: true }],
    "vue/no-constant-condition": "warn",
    "vue/no-empty-pattern": "error",
    "vue/no-extra-parens": ["error", "functions"],
    "vue/no-irregular-whitespace": "error",
    "vue/no-loss-of-precision": "error",
    "vue/no-restricted-syntax": [
      "error",
      "DebuggerStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "vue/no-sparse-arrays": "error",
    "vue/object-curly-newline": ["error", { multiline: true, consistent: true }],
    "vue/object-curly-spacing": ["error", "always"],
    "vue/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
    "vue/object-shorthand": [
      "error",
      "always",
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    "vue/operator-linebreak": ["error", "before"],
    "vue/prefer-template": "error",
    "vue/quote-props": ["error", "consistent-as-needed"],
    "vue/space-in-parens": ["error", "never"],
    "vue/space-infix-ops": "error",
    "vue/space-unary-ops": ["error", { words: true, nonwords: false }],
    "vue/template-curly-spacing": "error",
  },
};
