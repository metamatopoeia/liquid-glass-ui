const fs = require('fs');
const path = require('path');

const pkg = require('../package.json');
const mcpPkgPath = path.resolve(__dirname, '../mcp-server/package.json');
const mcpPkg = JSON.parse(fs.readFileSync(mcpPkgPath, 'utf-8'));

mcpPkg.version = pkg.version;
fs.writeFileSync(mcpPkgPath, JSON.stringify(mcpPkg, null, 2) + '\n');
console.log(`mcp-server version synced to ${pkg.version}`);
