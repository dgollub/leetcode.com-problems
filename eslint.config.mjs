import prettier from "eslint-plugin-prettier";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["eslint.config.mjs"],
}, ...compat.extends("prettier", "airbnb-base"), {
    plugins: {
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.node,
            ...Object.fromEntries(Object.entries(globals.browser).map(([key]) => [key, "off"])),
            ...globals.jest,
            require: true,
            exports: true,
            module: true,
        },

        ecmaVersion: 2020,
        sourceType: "commonjs",
    },

    settings: {
        "import/resolver": {
            node: {
                moduleDirectory: ["node_modules", "test"],
            },
        },
    },

    rules: {
        quotes: ["error", "single", {
            avoidEscape: true,
        }],

        "arrow-parens": ["error", "as-needed"],
        "class-methods-use-this": "off",

        "comma-dangle": ["error", {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "always-multiline",
            exports: "always-multiline",
            functions: "always-multiline",
        }],

        curly: ["error", "all"],
        "func-names": ["warn", "as-needed"],
        "global-require": "off",

        "import/newline-after-import": ["error", {
            count: 2,
        }],

        "max-len": ["error", 150, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],

        "no-await-in-loop": "off",
        "no-console": "off",

        "no-multiple-empty-lines": ["error", {
            max: 2,
            maxBOF: 0,
            maxEOF: 0,
        }],

        "no-restricted-syntax": ["error", {
            selector: "ForInStatement",
            message: "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        }, {
            selector: "LabeledStatement",
            message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        }, {
            selector: "WithStatement",
            message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        }],

        "no-underscore-dangle": "off",

        "no-unused-expressions": ["error", {
            allowShortCircuit: true,
        }],

        "no-unused-vars": ["error", {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
        }],

        "object-curly-newline": ["error", {
            ObjectExpression: {
                minProperties: 6,
                multiline: true,
                consistent: true,
            },

            ObjectPattern: {
                minProperties: 6,
                multiline: true,
                consistent: true,
            },
        }],

        "operator-linebreak": ["error", "before", {
            overrides: {
                "=": "none",
                "?": "after",
                ":": "after",
            },
        }],

        "prefer-destructuring": ["error", {
            VariableDeclarator: {
                array: false,
                object: true,
            },

            AssignmentExpression: {
                array: false,
                object: false,
            },
        }, {
            enforceForRenamedProperties: false,
        }],
    },
}];