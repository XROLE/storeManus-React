module.exports = {
    "extends": ["airbnb", "jest-enzyme"],
    "env": {
      "jest": true,
      "browser": true
    },
    "rules": {
        "react/jsx-uses-react": 2,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jest": true
      },
      "plugins": [
        "react"
      ]
};
