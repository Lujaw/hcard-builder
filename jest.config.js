module.exports = {
  "testEnvironment": "jsdom",
  "collectCoverage": true,
  "coverageReporters": ["json", "html"],
  "roots": [
    "<rootDir>/src/server/"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/src/client/"
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
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85
    }
  },
  "moduleFileExtensions": [
    "js",
    "jsx",
    "json"
  ]
};
