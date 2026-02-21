import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  injectStyle: false,
  minify: true,
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  loader: {
    '.css': 'local-css',
  },
});