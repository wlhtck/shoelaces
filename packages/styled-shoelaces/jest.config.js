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
  setupFiles: [
    './jest.setup.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  testPathIgnorePatterns: [
    'node_modules',
    '.cache',
  ],
};
