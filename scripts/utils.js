const path = require('path');

module.exports = function resolvePath(relativePath) {
  return path.resolve(__dirname, '..', relativePath);
};
