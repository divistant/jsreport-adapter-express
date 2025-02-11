import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintPrettierRules from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintPrettierRules,
  {
    'no-unused-vars': [
      'error',
      {
        caughtErrors: 'none',
      },
    ],
  },
]
