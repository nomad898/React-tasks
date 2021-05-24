/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    moduleNameMapper: {
        "^@root(.*)$": "<rootDir>/src$1",
        "^@components(.*)$": "<rootDir>/src/components$1",
        "^@containers(.*)$": "<rootDir>/src/containers$1",
        "^@stores(.*)$": "<rootDir>/src/stores$1",
        "^@models(.*)$": "<rootDir>/src/models$1",
        "^@utils(.*)$": "<rootDir>/src/utils$1",
        "\\.(css|scss|jpg)$": "identity-obj-proxy",
    } 
};
