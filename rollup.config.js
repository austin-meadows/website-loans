import pluginResolve from "@rollup/plugin-node-resolve";
import pluginTypescript from "@rollup/plugin-typescript";
import pluginHtml from "@web/rollup-plugin-html";
import autoprefixer from "autoprefixer";
import csso from "postcss-csso";
import pluginStylesLit from "rollup-plugin-lit-css";
import pluginLiterals from "rollup-plugin-minify-html-literals";
import pluginStyles from "rollup-plugin-styles";
import { terser as pluginTerser } from "rollup-plugin-terser";

import { version } from "./package.json";

const isProd = process.env.NODE_ENV === "production";
export default [
  {
    input: "src/www/index.html",
    output: {
      chunkFileNames: `[name]-${version}.js`,
      dir: "build",
      entryFileNames: `[name]-${version}.js`,
      manualChunks: {
        lit: ["lit"],
        router: ["@vaadin/router"],
      },
      sourcemap: !isProd,
      validate: isProd,
    },
    plugins: [
      pluginResolve(),
      pluginHtml({
        extractAssets: false,
        minify: isProd,
        transformHtml: [(html) => html.replace(/{{version}}/g, version)],
      }),
      pluginTypescript({ outputToFilesystem: false }),
      pluginStyles({
        extensions: [".scss"],
        mode: "emit",
        plugins: [autoprefixer(), isProd && csso()].filter(Boolean),
        sourceMap: isProd ? false : "inline",
      }),
      pluginStylesLit({
        include: ["**/*.scss"],
      }),
      isProd && pluginLiterals(),
      isProd &&
        pluginTerser({
          ecma: 2020,
          format: {
            comments: false,
            wrap_func_args: false,
          },
          module: true,
        }),
    ],
    preserveEntrySignatures: false,
    treeshake: {
      moduleSideEffects: true,
      preset: "smallest",
    },
  },
  {
    input: "src/www/index.scss",
    output: {
      assetFileNames: "[name][extname]",
      dir: "build",
    },
    plugins: [
      pluginStyles({
        extensions: [".scss"],
        mode: "extract",
        plugins: [autoprefixer(), isProd && csso()].filter(Boolean),
        sourceMap: isProd ? false : "inline",
      }),
    ],
  },
];
