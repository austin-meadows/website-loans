import fs from "fs";
import { brotliCompressSync } from "zlib";

import pluginResolve from "@rollup/plugin-node-resolve";
import pluginTypescript from "@rollup/plugin-typescript";
import { rollupPluginHTML as pluginHtml } from "@web/rollup-plugin-html";
import autoprefixer from "autoprefixer";
import csso from "postcss-csso";
import pluginGzip from "rollup-plugin-gzip";
import pluginStylesLit from "rollup-plugin-lit-css";
import htmlLiterals from "rollup-plugin-minify-html-literals";
import pluginStyles from "rollup-plugin-styles";
import { terser as pluginTerser } from "rollup-plugin-terser";

const { version } = JSON.parse(
  fs.readFileSync("package.json", { encoding: "utf-8" })
);
const isWatch = process.env.WATCH === "true";
const { default: pluginLiterals } = htmlLiterals;

export default [
  {
    input: "src/index.html",
    output: {
      chunkFileNames: `[name]-${version}.js`,
      dir: "build",
      entryFileNames: `[name]-${version}.js`,
      manualChunks: {
        lit: ["lit"],
        router: ["navigo"],
      },
      sourcemap: false,
      validate: true,
    },
    plugins: [
      pluginResolve(),
      pluginHtml({
        extractAssets: false,
        minify: true,
      }),
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
        mangle: {
          properties: {
            regex: /^_/,
          },
        },
        module: true,
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
    ],
    preserveEntrySignatures: false,
    treeshake: {
      moduleSideEffects: true,
      preset: "smallest",
    },
  },
  {
    input: "src/index.scss",
    output: {
      assetFileNames: "[name][extname]",
      dir: "temp",
    },
    plugins: [
      pluginStyles({
        extensions: [".scss"],
        mode: "extract",
        plugins: [autoprefixer(), csso({ comments: false })].filter(Boolean),
        sourceMap: false,
      }),
    ],
  },
];
