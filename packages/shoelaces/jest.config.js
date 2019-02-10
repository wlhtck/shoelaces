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
  reporters: [
    'default',
    [
      'jest-junit', {
        suiteName: 'Shoelaces',
        outputDirectory: '../../test-results/shoelaces',
        outputName: './results.xml',
      },
    ],
  ],
  testPathIgnorePatterns: [
    'node_modules',
  ],
};
