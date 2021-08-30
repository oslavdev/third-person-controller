module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.dist/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  coverageDirectory: '__tests__coverage',
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  reporters: ['default', 'jest-junit'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg|pdf|ico|mp4|obj)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  snapshotSerializers: ['jest-serializer-html'],
  cacheDirectory: '.cache/jest',
}
