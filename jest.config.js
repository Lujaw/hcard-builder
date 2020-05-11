module.exports = {
  "testEnvironment": "jsdom",
  "collectCoverage": true,
  "coverageReporters": ["json", "html"],
  "roots": [
    "<rootDir>/src/server/"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/src/client/",
    "<rootDir>/src/shared"
  ],
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "<rootDir>/src/client/",
    "<rootDir>/src/shared/"
  ],
  "testMatch": ["**/tests/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  "modulePathIgnorePatterns": [
    "/__snapshots__/.*",
    "/*.mock.js"
  ],
  "globals": {
    "__isBrowser__": true
  },
  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  },
  "coverageThreshold": {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  "moduleFileExtensions": [
    "js",
    "jsx",
    "json"
  ]
};
