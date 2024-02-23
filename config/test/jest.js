module.exports = {
  rootDir: '../../',
  verbose: true,
  restoreMocks: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/test/setup-after.ts'],
  moduleNameMapper: {
    '^common/(.*)$': '<rootDir>/src/common/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^pods/(.*)$': '<rootDir>/src/pods/$1',
  },
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
};