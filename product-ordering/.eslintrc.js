module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "double"
        ],
        "no-console": [
            "warn"
        ],
        "semi": [
            "error",
            "always"
        ],
    },
    "globals": {
        "moment": true,
        "productFactory": true,
        "reviewFactory": true
    }
    
    
};