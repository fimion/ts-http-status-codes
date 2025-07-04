import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@fimion/ts-http-status-codes": fileURLToPath(
        new URL("./src/index.ts", import.meta.url).href,
      ),
    },
  },
  test: {
    coverage: {
      include: ["src"],
      reporter: ["text", "json", "html"],
    },
  },
});
