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
    plugins: ['@typescript-eslint', 'simple-import-sort', 'sort-keys-fix'],
    rules: {
        '@next/next/no-img-element': 'off',
        '@next/next/no-sync-scripts': 'off',
        'no-unused-expressions': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'react-hooks/rules-of-hooks': 'off',
        'react/display-name': 'off',
        'react/self-closing-comp': 'warn',
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': 'warn',
        'sort-keys-fix/sort-keys-fix': 'warn',
        'storybook/prefer-pascal-case': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
