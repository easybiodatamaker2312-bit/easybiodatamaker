import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  // Match Next's automatic JSX runtime so components can be rendered without `import React`.
  esbuild: { jsx: 'automatic' },
  test: {
    environment: 'jsdom',
    globals: true,
    exclude: ['node_modules/**', 'tests/e2e/**'],
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
});
