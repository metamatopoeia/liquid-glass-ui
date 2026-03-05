const fs = require('fs');
const path = require('path');

const reactPkgPath = path.resolve(__dirname, '../packages/react/package.json');
const reactPkg = JSON.parse(fs.readFileSync(reactPkgPath, 'utf-8'));
const mcpPkgPath = path.resolve(__dirname, '../packages/mcp-server/package.json');
const mcpPkg = JSON.parse(fs.readFileSync(mcpPkgPath, 'utf-8'));

mcpPkg.version = reactPkg.version;
fs.writeFileSync(mcpPkgPath, JSON.stringify(mcpPkg, null, 2) + '\n');
console.log(`mcp-server version synced to ${reactPkg.version}`);
