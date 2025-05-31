import eslintPluginReact from "eslint-plugin-react";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginStorybook from "eslint-plugin-storybook";
import eslintPluginImport from "eslint-plugin-import";

export default [
  {
    files: ["*.js", "*.jsx"],
    extends: [
      "airbnb",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
      "plugin:storybook/recommended",
    ],
    plugins: {
      react: eslintPluginReact,
      prettier: eslintPluginPrettier,
      storybook: eslintPluginStorybook,
      import: eslintPluginImport,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "lf",
        },
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
        },
      ],
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: ["**/*.test.jsx", "**/*.test.js"],
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"],
        },
      },
    },
  },
];
