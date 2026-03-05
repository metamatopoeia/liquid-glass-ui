import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { THEME_DOCS } from '../content/index.js';

export function registerRecipeResources(server: McpServer): void {
  server.resource(
    'theme-recipes',
    'liquid-glass://recipes',
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: 'text/markdown',
          text: THEME_DOCS.recipes,
        },
      ],
    }),
  );
}
