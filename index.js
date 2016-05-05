var versions = ['4', '5', '6'];
var defaultPreset = 'babel-preset-es2015';

versions.forEach(function (version) {
  if (process.version.indexOf('v' + version) === 0) {
    module.exports = require(defaultPreset + '-node' + version);
  } else {
    module.exports = require(defaultPreset);
  }
});
