module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/test/**/*.(test|spec).(ts|tsx|js|jsx)'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|react-clone-referenced-element|@react-navigation)',
  ],
};
