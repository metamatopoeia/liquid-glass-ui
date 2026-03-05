#!/usr/bin/env node
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createServer } from "./server.js";
import { registerUseLiquidGlassDocs } from "./tools/useLiquidGlassDocs.js";
import { registerFetchDocs } from "./tools/fetchDocs.js";
import { registerComponentResources } from "./resources/components.js";
import { registerThemeResources } from "./resources/theme.js";
import { registerRecipeResources } from "./resources/recipes.js";
import { registerCreateThemePrompt } from "./prompts/createTheme.js";
import { registerAddComponentPrompt } from "./prompts/addComponent.js";

async function main(): Promise<void> {
  const server = createServer();

  registerUseLiquidGlassDocs(server);
  registerFetchDocs(server);

  registerComponentResources(server);
  registerThemeResources(server);
  registerRecipeResources(server);

  registerCreateThemePrompt(server);
  registerAddComponentPrompt(server);

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Fatal error starting MCP server:", error);
  process.exit(1);
});
