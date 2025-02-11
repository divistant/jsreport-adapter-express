import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintPrettierRules from 'eslint-config-prettier'
import pluginImport from 'eslint-plugin-import'
import pluginUnusedImports from 'eslint-plugin-unused-imports'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        ecmaVersion: 2020,
      },
    },
  },
  {
    plugins: {
      'unused-imports': pluginUnusedImports,
    },
    rules: {
      'import/no-unresolved': 'error',
      'import/named': 'error',
    },
  },
  pluginJs.configs.recommended,
  pluginImport.flatConfigs.recommended,
  eslintPrettierRules,
  // overrides
  {
    rules: {
      'no-unused-vars': [
        'error',
        {
          caughtErrors: 'none',
        },
      ],
      'no-useless-catch': 'off',
      'import/namespace': 'off',
      'import/no-dynamic-require': 'warn',
      'import/no-nodejs-modules': 'off',
      'import/no-named-as-default': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
]
