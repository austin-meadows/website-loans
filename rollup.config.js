// Import rollup plugins
import { copy } from "@web/rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";
import html from "@web/rollup-plugin-html";
import minifyHTML from "rollup-plugin-minify-html-literals";
import resolve from "@rollup/plugin-node-resolve";
import summary from "rollup-plugin-summary";
import typescript from "@rollup/plugin-typescript";

const isProd = process.env.NODE_ENV === "production";

export default {
  input: "src/app.ts",
  output: {
    dir: "build",
    manualChunks: {
      lit: ["lit"],
      router: ["@vaadin/router"],
    },
    sourcemap: !isProd,
  },
  plugins: [
    html({
      input: "src/index.html",
      minify: isProd,
    }),
    typescript(),
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
};
