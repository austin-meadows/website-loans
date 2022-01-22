import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
// import { copy } from "@web/rollup-plugin-copy";
import html from "@web/rollup-plugin-html";
import del from "rollup-plugin-delete";
import minifyLiterals from "rollup-plugin-minify-html-literals";
import { terser } from "rollup-plugin-terser";
import summary from "rollup-plugin-summary";

import { version } from "./package.json";

const isProd = process.env.NODE_ENV === "production";
const dir = {
  build: "./build",
};
export default {
  input: "index.html",
  output: {
    chunkFileNames: `[name]-${version}.js`,
    dir: dir.build,
    entryFileNames: `[name]-${version}.js`,
    manualChunks: {
      lit: ["lit"],
      router: ["@vaadin/router"],
    },
    sourcemap: !isProd,
  },
  plugins: [
    del({
      targets: dir.build,
    }),
    html({
      transformHtml: [(html) => html.replaceAll("{{version}}", version)],
      minify: isProd,
    }),
    typescript({
      outputToFilesystem: false,
    }),
    resolve(),
    // copy({ patterns: ["src/assets/**/*"] }),
    isProd && minifyLiterals(),
    isProd &&
      terser({
        ecma: 2021,
        module: true,
        format: {
          comments: false,
          wrap_func_args: false,
        },
      }),
    isProd && summary(),
  ],
  preserveEntrySignatures: false,
};
