import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import pluginReact from "eslint-plugin-react";
import {fixupConfigRules} from '@eslint/compat';

export default [
    {ignores: ['**/*', '!src/**', '!script/**']},
    {files: ['**/*.{js,mjs,cjs,jsx}']},
    {languageOptions: {parserOptions: {ecmaFeatures: {jsx: true}}}},
    {languageOptions: {globals: globals.browser}},
    {
        files: ['script/**/*.js'],
        languageOptions: {
            parserOptions: {
                sourceType: 'commonjs',
            },
            globals: globals.node,
        },
    },
    pluginJs.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
    {
        plugins : pluginReact,
        rules: {
            "react/prop-types": "off",
        }
    },
];
