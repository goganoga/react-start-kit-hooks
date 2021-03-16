module.exports = {
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        "react/no-set-state": "off",
        "react/prop-types": "off",
        "indent": ["error", 4],
    },
    "globals": {
        "window": true
    }
}
