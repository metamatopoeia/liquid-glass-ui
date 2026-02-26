import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { COMPONENT_DOCS, COMPONENT_NAMES } from '../content/index.js';

export function registerComponentResources(server: McpServer): void {
  server.resource(
    'component-doc',
    new ResourceTemplate('liquid-glass://components/{name}', { list: undefined }),
    async (uri, { name }) => {
      const componentName = typeof name === 'string' ? name : name[0];
      const content = COMPONENT_DOCS[componentName];

      if (!content) {
        return {
          contents: [
            {
              uri: uri.href,
              mimeType: 'text/plain',
              text: `Component "${componentName}" not found. Available: ${COMPONENT_NAMES.join(', ')}`,
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
