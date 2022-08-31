module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["airbnb", "prettier"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y", "@typescript-eslint", "prettier"],
  rules: {
    "no-unused-vars": "warn",
    "no-var": "error",
    "brace-style": "error",
    "prefer-template": "error",
    radix: "warn",
    "space-before-blocks": "warn",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/prefer-stateless-function": "off",
  },
  overrides: [
    {
      files: [
        "**/*.test.js",
        "**/*.test.jsx",
        "**/*.test.tsx",
        "**/*.spec.js",
        "**/*.spec.jsx",
        "**/*.spec.tsx",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
