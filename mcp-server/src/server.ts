import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

export function createServer(): McpServer {
  const server = new McpServer({
    name: 'liquid-glass-ui',
    version: '1.2.1',
  });

  return server;
}
