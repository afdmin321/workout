module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:storybook/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "react", "i18next", "react-hooks"],
    rules: {
        indent: [2, 4, {"SwitchCase": 1}],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "react/jsx-indent": [2, 4],
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "i18next/no-literal-string": ["error", { markupOnly: true }],
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
    },
    settings: {
        react: {
            createClass: "createReactClass",
            pragma: "React",
            fragment: "Fragment",
            version: "18.2.0",
            flowVersion: "0.53",
        },
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
        {
            files: ["**/src/**/*.test.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": "off",
            },
        },
    ],
};
