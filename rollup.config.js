import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { copy } from "@web/rollup-plugin-copy";
import html from "@web/rollup-plugin-html";
import minifyHTML from "rollup-plugin-minify-html-literals";
import { terser } from "rollup-plugin-terser";
import summary from "rollup-plugin-summary";

import { version } from "./package.json";

const isProd = process.env.NODE_ENV === "production";

export default {
  input: "index.html",
  output: {
    dir: "build",
    manualChunks: {
      lit: ["lit"],
      router: ["@vaadin/router"],
    },
    chunkFileNames: `[name]-${version}.js`,
    entryFileNames: `[name]-${version}.js`,
    sourcemap: !isProd,
  },
  plugins: [
    html({
      transformHtml: [(html) => html.replaceAll("{{version}}", version)],
      minify: isProd,
    }),
    typescript({
      outputToFilesystem: false,
    }),
    resolve(),
    copy({
      patterns: ["images/**/*"],
    }),
    isProd && minifyHTML(),
    isProd &&
      terser({
        ecma: 2020,
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
