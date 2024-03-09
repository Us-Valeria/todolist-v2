module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: import.meta.dirname,
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    quotes: ['error', 'single'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/no-unstable-nested-components': ['off', { allowAsProps: true }],
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-useless-fragment': 'off',
    // https://redux-toolkit.js.org/usage/immer-reducers#linting-state-mutations
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    '@typescript-eslint/consistent-type-imports': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['!mocks/**'] },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['antd'],
            importNames: ['DatePicker'],
            message: "Use local 'DatePicker' from src/components",
          },
        ],
      },
    ],
  },
};
