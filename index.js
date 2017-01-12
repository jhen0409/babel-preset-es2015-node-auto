var versions = ['4', '5', '6'];
var defaultPreset = 'babel-preset-es2015';
var version = process.version[1];

// node 7 convert to 6
if (version === '7') {
  version = '6'
}

module.exports = require(
  defaultPreset + (versions.indexOf(version) !== -1 ? '-node' + version : '')
);
