import { defineConfig } from "tsup";

export default defineConfig({
  //   entry: ["src/index.ts"],
  entry: ["src/**/*@(ts|tsx)"],
  dts: true,
  format: ["esm"],
  treeshake: true,
});
