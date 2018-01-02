module.exports = {
  roots: ['<rootDir>/front/src'],
  modulePaths: ['front/src'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  setupTestFrameworkScriptFile: '<rootDir>enzyme.config.js',

  setupFiles: [
    'raf/polyfill',
  ],
};
