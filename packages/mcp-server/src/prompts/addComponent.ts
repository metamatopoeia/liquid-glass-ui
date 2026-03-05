import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { COMPONENT_DOCS, COMPONENT_NAMES } from '../content/index.js';

export function registerAddComponentPrompt(server: McpServer): void {
  server.prompt(
    'add-component',
    `Guided prompt that scaffolds correct import and usage for a Liquid Glass UI component. Available components: ${COMPONENT_NAMES.join(', ')}`,
    {
      component: z
        .string()
        .describe(
          `Component name to scaffold, e.g. "Button", "Card", "Dialog". Available: ${COMPONENT_NAMES.join(', ')}`,
        ),
    },
    ({ component }) => {
      const doc = COMPONENT_DOCS[component];

      if (!doc) {
        return {
          messages: [
            {
              role: 'user',
              content: {
                type: 'text',
                text: `Component "${component}" not found in Liquid Glass UI. Available components: ${COMPONENT_NAMES.join(', ')}. Please help the user pick the correct component.`,
              },
            },
          ],
        };
      }

      const instructions = `You are helping a developer add the "${component}" component from Liquid Glass UI to their project.

Below is the full documentation for this component. Use it to:
1. Generate the correct import statement.
2. Scaffold a working usage example tailored to the user's context.
3. Mention available props and slots they can customize.
4. If relevant, show how to apply theme overrides for this component.

## Component Documentation

${doc}

## Important Notes
- The library package is "liquid-glass-ui"
- Users must import the stylesheet: import "liquid-glass-ui/styles.css"
- Components work standalone or inside a <ThemeProvider> for custom theming`;

      return {
        messages: [
          { role: 'user', content: { type: 'text', text: instructions } },
        ],
      };
    },
  );
}
