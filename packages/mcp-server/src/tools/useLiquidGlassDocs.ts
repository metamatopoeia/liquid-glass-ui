import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { LLMS_TXT } from '../content/index.js';

export function registerUseLiquidGlassDocs(server: McpServer): void {
  server.tool(
    'useLiquidGlassDocs',
    `You must use this tool to answer any questions related to Liquid Glass UI components or documentation.

Returns the llms.txt index — a master table of all available documentation sections. Use the returned doc keys with the fetchDocs tool to retrieve specific content.

Liquid Glass UI is a React component library for building liquid glass interfaces with CSS-variable-driven theming, Radix UI primitives, and glassmorphic design.`,
    {},
    async () => ({
      content: [{ type: 'text', text: LLMS_TXT }],
    }),
  );
}
