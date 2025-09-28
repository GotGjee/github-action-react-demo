import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./index.ts"],
  outDir: "dist-action",
  unbundle: false,
  format: "cjs",
  clean: true,
  minify: false,
  external: [],
});