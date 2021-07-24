const pluginPkg = require('../../package.json');
const pluginId = pluginPkg.name.replace(
  /^siapi-plugin-/i,
  ''
);

module.exports = pluginId;
