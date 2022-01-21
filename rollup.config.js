// Import rollup plugins
import { copy } from "@web/rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";
import html from "@web/rollup-plugin-html";
import minifyHTML from "rollup-plugin-minify-html-literals";
import resolve from "@rollup/plugin-node-resolve";
import summary from "rollup-plugin-summary";
import typescript from "@rollup/plugin-typescript";

export default {
  plugins: [
    html({
      input: "src/index.html",
    }),
    typescript(),

    resolve(),
    minifyHTML(),
    terser({
      ecma: 2020,
      module: true,
      format: {
        comments: false,
        wrap_func_args: false,
      },
    }),

    summary(),
    copy({
      patterns: ["images/**/*"],
    }),
  ],
  input: "src/index.ts",
  output: {
    dir: "build",
  },
  preserveEntrySignatures: "strict",
};
