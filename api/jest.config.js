/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    '**/*.{js,ts}',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['node_module']
}
