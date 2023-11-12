/* eslint-env node */
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb/hooks',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.js', '.ts',
                ],
            },
        },
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    root: true,
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'class-methods-use-this': 'off',
    },
    ignorePatterns: [
        'dist/**/*.js',
    ],
};
