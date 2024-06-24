/* eslint-disable no-undef */
require('@rushstack/eslint-patch/modern-module-resolution');
const path = require('node:path');
const createAliasSetting = require('@vue/eslint-config-airbnb/createAliasSetting');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  },
  overrides: [
    {
      files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:playwright/recommended']
    }
  ],
  settings: {
    ...createAliasSetting({
      '@': `${path.resolve(__dirname, 'src')}`
    })
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
};
