module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": [
    "standard",
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  "parser": "vue-eslint-parser",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "extends": "standard",
    "parser": "babel-eslint"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "no-unused-vars": 0
  }
};
