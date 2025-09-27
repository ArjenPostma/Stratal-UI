import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
    {
        ignores: ['node_modules', 'dist', 'build', 'coverage'],
    },

    {
        files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: {
                console: 'readonly',
                process: 'readonly',
                NodeJS: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            prettier: prettierPlugin,
        },
        rules: {
            // ESLint recommended rules
            'no-unused-vars': 'warn',

            // TypeScript recommended rules
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',

            // Prettier rules
            'prettier/prettier': [
                'error',
                {
                    semi: true,
                    trailingComma: 'all',
                    tabWidth: 4,
                    printWidth: 100,
                    singleQuote: true,
                    bracketSpacing: true,
                    arrowParens: 'always',
                },
            ],
        },
    },
];
