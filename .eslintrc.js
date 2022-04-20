module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {},
  settings: {
    react: {
      version: 'detect',
    },
  },
};
