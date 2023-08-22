module.exports = {
    extends: [
        'next/core-web-vitals',
        'plugin:prettier/recommended',
        'plugin:storybook/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'simple-import-sort'],
    rules: {
        '@next/next/no-sync-scripts': 'off',
        'react/display-name': 'off',
        'react-hooks/exhaustive-deps': 'off',
        '@next/next/no-img-element': 'off',
        'react-hooks/rules-of-hooks': 'off',
        'no-unused-expressions': 'error',
        'react/self-closing-comp': 'warn',
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
        'storybook/prefer-pascal-case': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
