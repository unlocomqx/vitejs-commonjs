import { viteCommonjs } from "@originjs/vite-plugin-commonjs";

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  plugins: [
    viteCommonjs(),
  ]
};

export default config;
