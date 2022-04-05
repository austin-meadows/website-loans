import fs from "fs";
import { brotliCompressSync } from "zlib";

import pluginHtml from "@rollup/plugin-html";
import pluginResolve from "@rollup/plugin-node-resolve";
import pluginTypescript from "@rollup/plugin-typescript";
import autoprefixer from "autoprefixer";
import csso from "postcss-csso";
import pluginGzip from "rollup-plugin-gzip";
import pluginStylesLit from "rollup-plugin-lit-css";
import pluginLiterals from "rollup-plugin-minify-html-literals";
import { sizeme as pluginSizeMe } from "rollup-plugin-sizeme";
import pluginStyles from "rollup-plugin-styles";
import { terser as pluginTerser } from "rollup-plugin-terser";

import buildHtml from "./src/html.js";

fs.rmSync("build", { force: true, recursive: true });
const { version } = JSON.parse(
  fs.readFileSync("package.json", { encoding: "utf-8" })
);
const isWatch = process.env.WATCH === "true";

export default {
  input: "src/app.ts",
  output: {
    chunkFileNames: `[name]-${version}.js`,
    dir: "build",
    entryFileNames: `[name]-${version}.js`,
    esModule: false,
    manualChunks: {
      lit: ["lit"],
      router: ["navigo"],
    },
    sourcemap: false,
    validate: true,
  },
  plugins: [
    pluginResolve(),
    pluginTypescript({ outputToFilesystem: false }),
    pluginStyles({
      extensions: [".scss"],
      mode: "emit",
      plugins: [
        autoprefixer(),
        csso({
          comments: false,
        }),
      ].filter(Boolean),
      sourceMap: false,
    }),
    pluginStylesLit({
      include: ["**/*.scss"],
      title: "Home | Blah",
    }),
    pluginLiterals(),
    pluginTerser({
      compress: {
        booleans_as_integers: true,
        drop_console: !isWatch,
        ecma: 2021,
        hoist_props: true,
        keep_fargs: false,
        module: true,
        passes: 2,
        toplevel: true,
        unsafe: true,
        unsafe_arrows: true,
        unsafe_comps: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_symbols: true,
        unsafe_undefined: true,
      },
      ecma: 2021,
      format: {
        comments: false,
        ecma: 2021,
        wrap_func_args: false,
      },
      module: true,
    }),
    pluginHtml({
      template: buildHtml,
      title: "Home | Uhh",
    }),
    !isWatch &&
      pluginGzip({
        customCompression: (content) =>
          brotliCompressSync(Buffer.from(content)),
        fileName: ".br",
      }),
    !isWatch &&
      pluginGzip({
        gzipOptions: {
          level: 9,
          memLevel: 9,
        },
      }),
    !isWatch && pluginSizeMe(),
  ],
  preserveEntrySignatures: false,
  treeshake: {
    moduleSideEffects: true,
    preset: "smallest",
  },
};
