module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
    "prettier"
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "import", "prettier"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto"
      }
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-console": [
      "warn",
      {
        allow: ["error"]
      }
    ],
    "comma-dangle": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external"],
        "newlines-between": "always-and-inside-groups"
      }
    ],
    "import/no-unresolved": "off"
  }
}
