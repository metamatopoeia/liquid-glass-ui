import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { THEME_DOCS, TOKEN_GROUP_DOCS, TOKEN_GROUP_NAMES } from '../content/index.js';

export function registerThemeResources(server: McpServer): void {
  server.resource(
    'theme-overview',
    'liquid-glass://theme/overview',
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: 'text/markdown',
          text: THEME_DOCS.overview,
        },
      ],
    }),
  );

  server.resource(
    'theme-css-variables',
    'liquid-glass://theme/css-variables',
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: 'text/markdown',
          text: THEME_DOCS['css-variables'],
        },
      ],
    }),
  );

  server.resource(
    'theme-token-group',
    new ResourceTemplate('liquid-glass://theme/tokens/{group}', { list: undefined }),
    async (uri, { group }) => {
      const groupName = typeof group === 'string' ? group : group[0];
      const content = TOKEN_GROUP_DOCS[groupName];

      if (!content) {
        return {
          contents: [
            {
              uri: uri.href,
              mimeType: 'text/plain',
              text: `Token group "${groupName}" not found. Available: ${TOKEN_GROUP_NAMES.join(', ')}`,
            },
          ],
        };
      }

      return {
        contents: [
          {
            uri: uri.href,
            mimeType: 'text/markdown',
            text: content,
          },
        ],
      };
    },
  );
}
