module.exports = function(env) {
  return require(`./scripts/webpack.${env}.js`);
};