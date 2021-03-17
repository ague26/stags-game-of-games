const path = require('path');

module.exports = {
  testMatch: [
    path.join(__dirname, 'src/**/*.unit.js')
  ],
  testEnvironment: 'node',
  verbose: true,
};
