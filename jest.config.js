/* eslint-disable max-len */
/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  'testEnvironment': 'node',
  'preset': 'jest-expo',
  'setupFilesAfterEnv': ['@testing-library/jest-native/extend-expect'],
  'transformIgnorePatterns': [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
  ],
  'moduleNameMapper': {
    '@/(.*)': '<rootDir>/src/$1',
  },

  'testEnvironment': 'node',

  'testRegex': '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
};
