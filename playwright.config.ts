import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: "pnpm run dev",
    port: 3009,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000
  },
  testDir: './src/tests/e2e',
  use: {
    baseURL: "http://localhost:3009"
  }
});
