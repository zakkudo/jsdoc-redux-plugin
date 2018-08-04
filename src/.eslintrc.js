module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:node/recommended"
    ],
    "env": {
        "jasmine": true
    },
    "plugins": [
        "jasmine"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        }
    },
    "rules": {
        'max-len': ["error", { "code": 100, "comments": 120 }]
    }
};
