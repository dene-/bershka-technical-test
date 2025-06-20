// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'semi': 'error',
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    '@typescript-eslint/no-explicit-any': 'error',
    'vue/no-multi-spaces': 'error',
    'no-unused-vars': 'error',
    'comma-dangle': [
      'error', {
        objects: 'always-multiline',
        arrays: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'newline-before-return': 'error',
  },
});
