import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  server: { https: true },
  plugins: [
    react(),
    tsconfigPaths(),
    checker({ typescript: true }),
    mkcert(),
  ],
});
