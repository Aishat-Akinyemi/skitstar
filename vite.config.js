// import react from "@vitejs/plugin-react";
// import { defineConfig } from "vite";
// // import { nodePolyfills } from "vite-plugin-node-polyfills";
// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
// import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
// import nodePolyfills from "rollup-plugin-polyfill-node"

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // define: {
//   //   "process.env": {},
//   // },
//   optimizeDeps: {
//     esbuildOptions: {
//         define: {
//             global: 'globalThis',
//             // "process.env": {},
//         },
//         plugins: [
//             NodeGlobalsPolyfillPlugin({
//                 buffer: true,
//                 process: true, 
            
//             }),
//             NodeModulesPolyfillPlugin()
//         ]
//     }
// },
// build: {
//     rollupOptions: {
//         plugins: [
//             // Enable rollup polyfills plugin
//             // used during production bundling
//             nodePolyfills()
//         ]
//     }
// }
// });


// import react from "@vitejs/plugin-react";
// import { defineConfig } from "vite";
// // import { nodePolyfills } from "vite-plugin-node-polyfills";
// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // define: {
//   //   "process.env": {},
//   // },
//   optimizeDeps: {
//     esbuildOptions: {
//         define: {
//             global: 'globalThis',
//             // "process.env": {},
//         },
//         plugins: [
//             NodeGlobalsPolyfillPlugin({
//                 buffer: true,
//                 process: true
//             })
//         ]
//     }
// }
// });



import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  define: {
    "process.env": {},
  },
});