import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./components/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
  },
});
