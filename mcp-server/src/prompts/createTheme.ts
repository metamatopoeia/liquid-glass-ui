import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

const SYSTEM_MESSAGE = `You are helping a developer create a custom Liquid Glass UI theme using the createTheme() function.

The theme engine accepts a DeepPartial<LiquidGlassThemeInput>. Every field is optional — unspecified values fall back to built-in defaults.

## Full Type Reference

\`\`\`ts
interface LiquidGlassThemeInput {
  palette: {
    primary: { main: string; dark: string; light: string; contrastText?: string };
    error: { main: string; dark: string; light: string; bg: string; text: string };
    warning: { bg: string; text: string };
    info: { bg: string; text: string };
    success: { bg: string; text: string };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      onSurface: string;
      onSurfaceSecondary: string;
    };
    background: { default: string; paper: string; fallback: string };
    action: { hover: string };
    divider: string;
    chip: { filled: string };
  };
  glass: {
    blur: string;
    bgOpacity: string;
    borderOpacity: string;
    surface: string;
    border: string;
    reflection: string;
    easing: string;
    transitionDuration: string;
    transition: string;
    shadowSoft: string;
    shadowSharp: string;
  };
  typography: { fontFamily: string };
  radius: { sm: string; md: string; lg: string };
  shadows: { sm: string; md: string; lg: string };
  transitions: { fast: string; normal: string };
  spacing: { unit: number };
  zIndex: { appBar: number; drawer: number; modal: number; popover: number; tooltip: number };
  components?: Partial<Record<ComponentName, ComponentStyleOverride>>;
  colorSchemes?: {
    light?: DeepPartial<Omit<LiquidGlassThemeInput, 'colorSchemes' | 'components'>>;
    dark?: DeepPartial<Omit<LiquidGlassThemeInput, 'colorSchemes' | 'components'>>;
  };
  cssVarPrefix?: string; // default "--lg"
}

type ComponentName =
  | 'Button' | 'Card' | 'AppBar' | 'Paper' | 'Dialog' | 'AlertDialog'
  | 'Select' | 'TextField' | 'Chip' | 'Avatar' | 'Fab' | 'IconButton'
  | 'Separator' | 'Skeleton' | 'Spinner' | 'DropdownMenu';
\`\`\`

## Instructions

1. Ask the user for their brand colors (primary, and optionally error/warning/info/success).
2. Ask if they need dark mode overrides via colorSchemes.dark.
3. Ask if they want to customize glass physics (blur, opacity, etc.).
4. Generate a complete createTheme() call with their values.
5. Include the import statement and wrap in a reusable module pattern.

## Output Format

\`\`\`ts
import { createTheme } from "liquid-glass-ui";

export const theme = createTheme({
  // ... user's overrides
});
\`\`\``;

export function registerCreateThemePrompt(server: McpServer): void {
  server.prompt(
    'create-theme',
    'Guided prompt to generate a valid createTheme() call with custom brand colors, dark mode, and glass physics.',
    {
      brandColor: z
        .string()
        .optional()
        .describe('Primary brand color hex value, e.g. "#6366f1"'),
      darkMode: z
        .enum(['yes', 'no'])
        .optional()
        .describe('Whether to include dark mode overrides'),
    },
    ({ brandColor, darkMode }) => {
      let userContext = '';
      if (brandColor) {
        userContext += `\nThe user's primary brand color is: ${brandColor}`;
      }
      if (darkMode === 'yes') {
        userContext += '\nThe user wants dark mode overrides included.';
      }

      return {
        messages: [
          { role: 'user', content: { type: 'text', text: SYSTEM_MESSAGE + userContext } },
        ],
      };
    },
  );
}
