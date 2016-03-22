const versions = ['4', '5'];

versions.forEach(version => {
  if (process.version.indexOf(`v${version}`) === 0) {
    module.exports = require(`babel-preset-es2015-node${version}`);
  }
});
