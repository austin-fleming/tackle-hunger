// const restrictedImports = require('./.eslint-restricted-imports');

const extendsCommonStart = [
  // Order is important here
  'eslint:recommended',
  // `react-app` is not included in airbnb-typescript
  'react-app',
  // Use airbnb with react support - we also add stricter checking later with plugin:react/all
  'airbnb',
];
const extendsCommonEnd = [
  'airbnb/hooks',
  'plugin:jsx-a11y/recommended',
  // Re-Enable all react rules (should be after all the others)
  'plugin:react/all',
  // Add browser compatibility linting
  'plugin:compat/recommended',
  // Resolve conflicting prettier formatting rules see: https://github.com/prettier/eslint-config-prettier
  'prettier',
  'prettier/@typescript-eslint',
  'prettier/babel',
  'prettier/react',
];

const commonRuleOverrides = {
  /* eslint-disable sort-keys-fix/sort-keys-fix */
  // HACK: Temporarily disable some rules to reduce clutter for now
  'react/prop-types': 'off',
  'react/require-default-props': 'off',
  'react-hooks/exhaustive-deps': 'off',
  // Require braces in arrow function body as needed
  'arrow-body-style': ['error', 'as-needed'],
  // Enforce import order and no spaces between imports
  'import/order': [
    'error',
    {
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      pathGroups: [
        {
          pattern: 'react',
          group: 'external',
          position: 'before',
        },
      ],
      pathGroupsExcludedImportTypes: ['react'],
      'newlines-between': 'never',
    },
  ],
  // Allow named exports from files with a single export
  'import/prefer-default-export': 'off',
  // Disallow default exports
  'import/no-default-export': 'error',
  // Disallow node imports (this is a browser application)
  'import/no-nodejs-modules': 'error',
  // Disallow /index in imports
  'import/no-useless-path-segments': [
    'error',
    {
      noUselessIndex: true,
    },
  ],
  // Prevent certain items being imported and try to prevent relative paths to internals
  // 'no-restricted-imports': [
  //   'error',
  //   {
  //     paths: restrictedImports,
  //     patterns: [
  //       '**/*/assets',
  //       // '**/*/components',
  //       '**/*/hooks',
  //       '**/*/pages',
  //       // '**/*/scenes',
  //       '**/*/services',
  //       '**/*/theme',
  //       // '**/*/utils',
  //     ],
  //   },
  // ],
  // Prefer arrow functions in callbacks
  'prefer-arrow-callback': 'error',
  // Enforce function components being defined as arrow functions
  'react/function-component-definition': [
    'error',
    {
      namedComponents: 'arrow-function',
    },
  ],
  // Enforce React.Fragment vs <>
  'react/jsx-fragments': ['error', 'element'],
  // Turn off nested jsx rule
  'react/jsx-max-depth': 'off',
  // Allow text in jsx components
  'react/jsx-no-literals': 'off',
  // TODO: investigate re-enabling
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-sort-props': [
    'error',
    {
      callbacksLast: true,
      ignoreCase: false,
      noSortAlphabetically: false,
      reservedFirst: true,
      shorthandFirst: true,
    },
  ],
  // Sort imports
  'sort-imports': [
    'error',
    {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
    },
  ],
  // Sort keys in objects etc
  'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: true }],
  'no-underscore-dangle': 'off',

  // Next.js handles import behind the scenes
  'react/react-in-jsx-scope': 0,
};

module.exports = {
  env: {
    browser: true,
  },
  overrides: [
    // Configuration for all javascript files
    {
      extends: [...extendsCommonStart, ...extendsCommonEnd],
      files: ['**/*.js', '**/*.jsx'],
      plugins: ['jsx-a11y', 'sort-keys-fix'],
      rules: {
        ...commonRuleOverrides,
      },
    },
    // Configuration for all typescript files
    {
      extends: [
        ...extendsCommonStart,
        // Disable these for now as they results in a lot of warnings which are non-essential
        'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript',
        'plugin:typescript-sort-keys/recommended',
        ...extendsCommonEnd,
      ],
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint', 'jsx-a11y', 'sort-keys-fix'],
      rules: {
        ...commonRuleOverrides,
        /* eslint-disable sort-keys-fix/sort-keys-fix */
        // HACK: Temporarily disable some rules to reduce clutter for now
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',

        // Enforce 'type' for type definitions
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

        // False positives. fixed by @typescript-eslint/no-unused-vars-experimental rule
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars-experimental': ['error'],

        // False positives. fixed by @typescript-eslint/no-shadow rule
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        /* eslint-enable sort-keys-fix/sort-keys-fix */

        // Turn off as it prevents clean recursion in async functions
        '@typescript-eslint/return-await': 'off',
      },
    },
    // Enforce default exports in studio and web/pages
    {
      files: ['**/pages/**/*', './studio/**/*'],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': 'error',
      },
    },
    // Allow 'require' & devDependencies in root js files (pure javascript is only used for required configs)
    {
      files: ['./*.js', './web/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },
  ],
  root: true,
  settings: {
    // Tell import/order about our internal modules
    'import/internal-regex': '^(assets|components|hooks|pages|scenes|services|theme|utils)',
    polyfills: ['Promise'],
  },
};
