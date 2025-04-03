module.exports = {
  preset: 'ts-jest', // Use ts-jest for TypeScript support
  testEnvironment: 'jest-environment-jsdom', // Use jsdom for DOM-related tests
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest for transforming TypeScript files
  },
  setupFilesAfterEnv: [
    // No need to include @testing-library/jest-dom/extend-expect anymore
  ],
};