# Liquid Glass MCP Server

An [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) server that gives AI coding assistants contextual knowledge of the Liquid Glass UI component library — props, theming, CSS variables, slots, and usage examples.

## Setup

### Windsurf

Add to your Windsurf MCP settings:

```json
{
  "mcpServers": {
    "liquid-glass-ui": {
      "command": "npx",
      "args": ["-y", "@metamatopoeia/liquid-glass-mcp"]
    }
  }
}
```

### Cursor

Add to `.cursor/mcp.json` in your project root:

```json
{
  "mcpServers": {
    "liquid-glass-ui": {
      "command": "npx",
      "args": ["-y", "@metamatopoeia/liquid-glass-mcp"]
    }
  }
}
```

### Claude Desktop

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "liquid-glass-ui": {
      "command": "npx",
      "args": ["-y", "@metamatopoeia/liquid-glass-mcp"]
    }
  }
}
```

### Claude Code

```bash
claude mcp add liquid-glass-ui -- npx -y @metamatopoeia/liquid-glass-mcp
```

### Local Development

If developing locally or using an unreleased version, point directly to the built output:

```json
{
  "mcpServers": {
    "liquid-glass-ui": {
      "command": "node",
      "args": [
        "/absolute/path/to/liquid-glass-ui/packages/mcp-server/dist/index.js"
      ]
    }
  }
}
```

## Capabilities

### Tools

| Tool                 | Description                                                                            |
| :------------------- | :------------------------------------------------------------------------------------- |
| `useLiquidGlassDocs` | Returns the `llms.txt` index — a master table of all available documentation sections. |
| `fetchDocs`          | Fetches content for one or more doc keys (e.g. `components/Button`, `theme/overview`). |

The two-step pattern: first call `useLiquidGlassDocs` to discover available docs, then `fetchDocs` with specific keys to retrieve content.

### Resources

| Resource URI                          | Content                                                                        |
| :------------------------------------ | :----------------------------------------------------------------------------- |
| `liquid-glass://components/{name}`    | Per-component documentation (props, slots, variants, examples).                |
| `liquid-glass://theme/overview`       | Full theming guide.                                                            |
| `liquid-glass://theme/css-variables`  | Complete CSS variable reference.                                               |
| `liquid-glass://theme/tokens/{group}` | Token group detail (glass, palette, radius, shadows, transitions, typography). |
| `liquid-glass://recipes`              | Code recipes for common theming patterns.                                      |

### Prompts

| Prompt          | Description                                                               |
| :-------------- | :------------------------------------------------------------------------ |
| `create-theme`  | Guided prompt to generate a valid `createTheme()` call with brand colors. |
| `add-component` | Guided prompt to scaffold correct import and usage for any component.     |

## Available Components

Button, Card, AppBar, Paper, Dialog, AlertDialog (deprecated — use Dialog), Select, TextField, Chip, Avatar, Fab, IconButton, Separator, Skeleton, Spinner, DropdownMenu, SpeedDial, SpeedDialAction

### Testing with MCP Inspector

```bash
npx @modelcontextprotocol/inspector node dist/index.js
```
