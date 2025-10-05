import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/mein_app5-master/",
  build: { outDir: "docs" },
  plugins: [react()],
});
