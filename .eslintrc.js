module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'no-param-reassing': 'off',
    camelcase: 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': off,
  },
};
