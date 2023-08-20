import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// import { nodePolyfills } from "vite-plugin-node-polyfills";
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // define: {
  //   "process.env": {},
  // },
  optimizeDeps: {
    esbuildOptions: {
        define: {
            global: 'globalThis',
            // "process.env": {},
        },
        plugins: [
            NodeGlobalsPolyfillPlugin({
                buffer: true,
                process: true, 
                global: true
            })
        ]
    }
}
});
