import pluginResolve from "@rollup/plugin-node-resolve";
import pluginTypescript from "@rollup/plugin-typescript";
import pluginHtml from "@web/rollup-plugin-html";
import autoprefixer from "autoprefixer";
import csso from "postcss-csso";
import normalize from "postcss-normalize";
import pluginLiterals from "rollup-plugin-minify-html-literals";
import pluginPostCSS from "rollup-plugin-postcss";
import pluginPostCSSLit from "rollup-plugin-postcss-lit";
import pluginSummary from "rollup-plugin-summary";
import { terser as pluginTerser } from "rollup-plugin-terser";

import { version } from "./package.json";

const isProd = process.env.NODE_ENV === "production";
export default [
  {
    input: "src/www/index.html",
    output: {
      chunkFileNames: `[name]-${version}.js`,
      dir: "./build",
      entryFileNames: `[name]-${version}.js`,
      manualChunks: {
        lit: ["lit"],
        router: ["@vaadin/router"],
      },
      sourcemap: !isProd,
    },
    plugins: [
      pluginResolve(),
      pluginHtml({
        extractAssets: false,
        minify: isProd,
        transformHtml: [(html) => html.replace(/{{version}}/g, version)],
      }),
      pluginTypescript({ outputToFilesystem: false }),
      pluginPostCSS({
        plugins: [autoprefixer(), isProd && csso()].filter(Boolean),
        sourceMap: isProd ? false : "inline",
      }),
      pluginPostCSSLit(),
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
      isProd && pluginSummary({ showGzippedSize: false }),
    ],
    preserveEntrySignatures: false,
  },
  {
    input: "src/www/index.scss",
    output: {
      file: "build/index.css",
    },
    plugins: pluginPostCSS({
      extract: true,
      plugins: [autoprefixer(), normalize(), isProd && csso()].filter(Boolean),
      sourceMap: isProd ? false : "inline",
    }),
  },
];
