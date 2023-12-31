import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      cacheDirectory: "./node_modules/.cache/remix",
      ignoredRouteFiles: ["**/.*", "**/*.test.{ts,tsx}"],
      serverModuleFormat: "cjs",
    }),
    tsconfigPaths(),
  ],
});

// /** @type {import('@remix-run/dev').AppConfig} */
// module.exports = {
//   cacheDirectory: "./node_modules/.cache/remix",
//   ignoredRouteFiles: ["**/.*", "**/*.test.{ts,tsx}"],
//   serverModuleFormat: "cjs",
// };
