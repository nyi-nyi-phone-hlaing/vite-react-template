const js = require("@eslint/js");
const globals = require("globals");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const reactRefresh = require("eslint-plugin-react-refresh");
const prettier = require("eslint-config-prettier");
const typescriptEslintPlugin = require("@typescript-eslint/eslint-plugin");
const typescriptEslintParser = require("@typescript-eslint/parser");

module.exports = [
  { ignores: ["dist", "node_modules"] }, // Ignore build and dependencies directories
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Apply to JS, JSX, TS, and TSX files
    languageOptions: {
      ecmaVersion: "latest", // Use latest ECMAScript features
      globals: { ...globals.browser, ...globals.node }, // Browser and Node globals
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module", // Allows ES module imports
      },
    },
    settings: {
      react: { version: "detect" }, // Automatically detect React version
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": typescriptEslintPlugin, // TypeScript plugin
    },
    extends: [
      "eslint:recommended", // Basic ESLint rules
      "plugin:react/recommended", // React specific linting rules
      "plugin:react-hooks/recommended", // React hooks linting rules
      "plugin:@typescript-eslint/recommended", // TypeScript linting rules
      "prettier", // Disables formatting rules that conflict with Prettier
      "plugin:prettier/recommended", // Enables Prettier integration with ESLint
    ],
    rules: {
      ...js.configs.recommended.rules, // ESLint recommended rules
      ...react.configs.recommended.rules, // React recommended rules
      ...react.configs["jsx-runtime"].rules, // JSX Runtime rules for React 17+
      ...reactHooks.configs.recommended.rules, // React hooks recommended rules
      "react/jsx-no-target-blank": "off", // Allow target=_blank for external links
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }, // Warn on non-exported components in HMR
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ], // Warn on unused vars but allow variables with leading _
      "@typescript-eslint/explicit-module-boundary-types": "off", // Disable requirement for explicit return types
      "@typescript-eslint/no-explicit-any": "warn", // Warn on any type usage
      "react/prop-types": "off", // Disable prop-types rule for TypeScript
      "react/jsx-uses-react": "off", // React 17+ no longer requires React in scope
      "prettier/prettier": ["error", { singleQuote: true, semi: false }], // Prettier config (single quotes, no semicolons)
    },
  },
];
