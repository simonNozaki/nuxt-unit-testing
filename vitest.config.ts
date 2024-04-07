import { resolve } from "path";
import { defineVitestConfig } from "@nuxt/test-utils/config"

export default defineVitestConfig({
  test: {
    setupFiles: [resolve(__dirname, './test/setup.ts')]
  }
});
