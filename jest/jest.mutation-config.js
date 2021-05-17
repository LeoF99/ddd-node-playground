const defaultConfig = require('./jest.config.js');

module.exports = {
  ...defaultConfig,
  rootDir: 'src',
  coverageDirectory: 'coverage/mutation',
};
