import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import vitePluginHtmlEnv from 'vite-plugin-html-env'; // https://vitejs.dev/config/

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginHtmlEnv(),
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint --ext .ts,.tsx src',
      },
    }),
  ],
});
