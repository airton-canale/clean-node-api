import type { Config } from 'jest'

const config: Config = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  collectCoverage: true,
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

export default config
