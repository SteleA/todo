module.exports = {
    "parser": "babel-eslint",
    "ecmaFeatures": {
        "classes": true
    },
    "rules": {
      "react/jsx-uses-vars": [2],
      "react/jsx-filename-extension": 0,
      "react/jsx-uses-react": "error",
    },
    "extends": "airbnb-base",
    "plugins": [
        "import"
    ]
};
