const config = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  collectCoverage: true,
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

module.exports = config
