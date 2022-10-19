function parserConfig(options = {}) {
  return {
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020,
      extraFileExtensions: ['.vue'],
      ...options
    }
  };
}

module.exports = {
  ignorePatterns: [
    '*.min.js',
    '/node_modules/',
    '**/dist/**',
    '.nuxt',
    '/cypress/'
  ],
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  ...parserConfig(),
  plugins: ['vue', '@typescript-eslint', 'unused-imports'],
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-use-before-define': ['error', { functions: false }],
    'no-underscore-dangle': [0, { allowAfterThis: false }],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-bitwise': ['error', { allow: ['~'] }],
    'no-useless-constructor': 'off',
    'prefer-rest-params': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-new': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'consistent-return': 'off',
    'guard-for-in': 'off',
    'no-restricted-syntax': 'off',
    camelcase: 'off',
    'unused-imports/no-unused-imports': 'error',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    'no-continue': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': 'error',
    'linebreak-style': 'off',
    'arrow-parens': 'off',
    curly: 'error',
    'object-curly-newline': 'off',
    'no-mixed-operators': 'off',
    'arrow-body-style': 'off',
    'function-paren-newline': 'off',
    'space-before-function-paren': 0,
    'max-len': ['error', 120, 2, { ignoreUrls: true, ignoreStrings: true }],
    'no-alert': 'error',
    radix: 'off',
    'no-undef': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'newline-after-var': ['off', 'never'],
    'no-prototype-builtins': 'off',
    'no-nested-ternary': 'off',
    'default-case': 'off',
    'func-names': 0,
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/require-default-prop': ['off'],
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: false,
      ignores: []
    }],
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'error',
    'vue/this-in-template': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 10
      },
      multiline: {
        max: 1
      }
    }],
    'vue/component-tags-order': 'off',
    'vue/component-definition-name-casing': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true }
    ]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'max-len': 'off'
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      ...parserConfig({ experimentalDecorators: true }),
      rules: {
        '@typescript-eslint/require-await': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', {
          ignoreTypeReferences: true,
          functions: false,
          classes: false
        }],
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        'no-shadow': 'off',
        'no-void': 'off'
      }
    }
  ]
};
