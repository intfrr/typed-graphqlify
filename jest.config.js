module.exports = {
  testRegex: '.*\\.test\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^app(.*)$': '<rootDir>/src$1',
  },
  collectCoverageFrom: ['<rootDir>/src/*.ts'],
  automock: false,
  testEnvironment: 'jsdom',
  testURL: 'http://localhost/',
}
