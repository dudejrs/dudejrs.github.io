module.exports = {
    root: true,
    ignorePatterns: ['node_modules/**/*', 'build/**/*'],
    env: {
        browser: true,
        node: true,
    },
    globals: {
        process: 'readonly',
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    plugins: ['react'],
    overrides: [
        {
            files: ['src/**/*.{js,jsx,ts,tsx}'],
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {jsx: true},
            },
            env: {
                es6: true,
                browser: true,
            },
        },
        {
            files: ['script/**/*.js'],
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'commonjs',
            },
            env: {
                es6: true,
                node: true,
            },
        },
    ],
    rules: {
        'react/prop-types': 'off',
        'no-unused-vars': [
            'error',
            {
                ignoreRestSiblings: true,
                destructuredArrayIgnorePattern: '^_',
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
