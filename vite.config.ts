import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import vitePluginHtmlEnv from 'vite-plugin-html-env';
import packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginHtmlEnv(),
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: packageJson.scripts['eslint:check'],
      },
      stylelint: {
        lintCommand: packageJson.scripts['stylelint:check'],
      },
    }),
  ],
});
