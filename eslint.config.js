"use strict";

const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  { ignores: ["node_modules/**"] },
  js.configs.recommended,
  {
    files: ["app.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: globals.browser,
    },
    rules: {
      // app.js laeuft als klassisches Script und legt seine Funktionen bewusst
      // global ab: <script type="module"> wuerde die Seite beim Oeffnen per
      // file:// an der CORS-Pruefung scheitern lassen, und genau so soll sie
      // benutzbar bleiben.
      "no-implicit-globals": "off",

      eqeqeq: ["error", "always"],
      "no-var": "error",
      "prefer-const": "error",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-console": "warn",
    },
  },
  {
    files: ["eslint.config.js"],
    languageOptions: { sourceType: "commonjs", globals: globals.node },
  },
];
