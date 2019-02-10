module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/test/**/*.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  coverageDirectory: '../../test-results/shoelaces',
  testPathIgnorePatterns: [
    'node_modules',
  ],
};
