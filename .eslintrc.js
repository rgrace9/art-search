module.exports = {
  parser: 'babel-eslint',
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:json/recommended',
  ],
  plugins: ['react', 'prettier', 'simple-import-sort'],
  rules: {
    'no-console': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'arrow-body-style': 'off',
    'react/jsx-filename-extension': 'off',
    'prefer-const': 'error',
  },
};
