import { z } from 'zod';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { DOC_KEY_MAP } from '../content/index.js';

export function registerFetchDocs(server: McpServer): void {
  server.tool(
    'fetchDocs',
    'Fetch documentation for one or more doc keys returned by useLiquidGlassDocs. Pass keys like "components/Button", "theme/overview", "theme/tokens/glass", "theme/recipes", etc.',
    {
      keys: z
        .array(z.string())
        .min(1)
        .describe(
          'Array of doc keys to fetch, e.g. ["components/Button", "theme/css-variables"]',
        ),
    },
    async ({ keys }) => {
      const results: string[] = [];
      const notFound: string[] = [];

      for (const key of keys) {
        const content = DOC_KEY_MAP[key];
        if (content) {
          results.push(content);
        } else {
          notFound.push(key);
        }
      }

      if (notFound.length > 0) {
        const available = Object.keys(DOC_KEY_MAP).join(', ');
        results.push(
          `\n---\n\n**Keys not found:** ${notFound.join(', ')}\n\n**Available keys:** ${available}`,
        );
      }

      return {
        content: [{ type: 'text', text: results.join('\n\n---\n\n') }],
      };
    },
  );
}
