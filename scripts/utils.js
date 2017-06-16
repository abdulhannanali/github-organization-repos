const path = require('path');
const NODE_ENV = process.env.NODE_ENV;

function resolvePath(relativePath) {
  return path.resolve(__dirname, '..', relativePath);
}

function useInProduction(prodValue, defaultValue) {
  return NODE_ENV === 'production'
    ? prodValue
    : defaultValue;
}

module.exports = {
  resolvePath,
  useInProduction,
};
