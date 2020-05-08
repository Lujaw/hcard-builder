module.exports = {
  testEnvironment: "node",
  collectCoverage: true,
  coverageReporters: ["json", "html"],
  roots: [
    "<rootDir>/src/server/"
  ],
  testMatch: ["**/tests/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  modulePathIgnorePatterns: [
    "/__snapshots__/.*",
    "/*.mock.js"
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 60,
      statements: 60
    }
  },
  moduleFileExtensions: [
    "js",
    "jsx",
    "json"
  ]
};
