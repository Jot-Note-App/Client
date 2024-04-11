import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import relay from "vite-plugin-relay";

// https://vitejs.dev/config/
export default defineConfig({
  //TODO: Change base config if not using GitHub Pages default URL
  base: '/Client/',
  plugins: [relay, react()],
  define: {
    global: 'window',
  }
});
