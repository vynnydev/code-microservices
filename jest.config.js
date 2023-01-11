module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  projects: [
    "<rootDir>/packages/services/**/jest.config.js"
  ],
  testEnvironment: "node",
  testMatch: [
    "*.spec.ts"
  ]
};