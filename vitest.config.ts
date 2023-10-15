import { resolve } from "path";
import { defineVitestConfig } from "nuxt-vitest/config";

export default defineVitestConfig({
  test: {
    setupFiles: [resolve(__dirname, './test/setup.ts')]
  }
});
