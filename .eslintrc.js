module.exports = {
    "root": true,
    "env": {
        "node": true,
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": ["eslint:recommended"],
    extends: [
        // add more generic rulesets here, such as:
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    settings: {},
    rules: {
        // override/add rules settings here, such as:
        'vue/no-unused-vars': 'off',
        "vue/max-attributes-per-line": [
            "error",
            {
                "singleline": 3,
                "multiline": {
                    "max": 3,
                    "allowFirstLine": true
                }
            }
        ],
        "vue/html-indent": "off",
        "vue/html-self-closing": "off",
        // "vue/singleline-html-element-content-newline": ["error", {
        //     "ignoreWhenNoAttributes": true,
        //     "ignoreWhenEmpty": true,
        //     "ignores": ["pre", "textarea", ...INLINE_ELEMENTS]
        // }]
        "vue/singleline-html-element-content-newline": "off",
        "vue/multiline-html-element-content-newline": "off"
    }
}