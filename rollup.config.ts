import pluginResolve from "@rollup/plugin-node-resolve";
import pluginTypescript from "@rollup/plugin-typescript";

import pluginHtml from "@web/rollup-plugin-html";

import pluginDel from "rollup-plugin-delete";
import pluginLiterals from "rollup-plugin-minify-html-literals";
import pluginPostCSS from "rollup-plugin-postcss";
import pluginPostCSSLit from "rollup-plugin-postcss-lit";
import pluginSummary from "rollup-plugin-summary";
import { terser as pluginTerser } from "rollup-plugin-terser";

import autoprefixer from "autoprefixer";
import csso from "postcss-csso";
import normalize from "postcss-normalize";

import { version } from "./package.json";

const isProd = process.env.NODE_ENV === "production";
const plugins = {
  default: [
    pluginResolve(),

    pluginHtml({
      transformHtml: [(html) => html.replace(/{{version}}/g, version)],
      minify: isProd,
      extractAssets: false,
    }),
    pluginTypescript({ outputToFilesystem: false }),
    pluginPostCSS({
      plugins: [autoprefixer(), normalize(), isProd && csso()].filter(Boolean),
      sourceMap: isProd ? false : "inline",
    }),
    pluginPostCSSLit(),
    isProd && pluginLiterals(),
    isProd &&
      pluginTerser({
        ecma: 2020,
        module: true,
        format: {
          comments: false,
          wrap_func_args: false,
        },
      }),
    isProd && pluginSummary({ showGzippedSize: false }),
  ],
  shared: [
    pluginPostCSS({
      plugins: [autoprefixer(), normalize(), isProd && csso()].filter(Boolean),
      sourceMap: isProd ? false : "inline",
      extract: true,
    }),
  ],
};
export default [
  {
    plugins: [pluginDel({ targets: "./build" })],
  },
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
    plugins: plugins.default,
    preserveEntrySignatures: false,
  },
  {
    input: "src/www/index.scss",
    output: {
      file: "build/index.css",
    },
    plugins: plugins.shared,
  },
];
