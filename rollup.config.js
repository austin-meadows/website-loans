import fs from "fs";
import { brotliCompressSync } from "zlib";

import pluginHTML from "@rollup/plugin-html";
import pluginJSON from "@rollup/plugin-json";
import pluginResolve from "@rollup/plugin-node-resolve";
import pluginTypescript from "@rollup/plugin-typescript";
import autoprefixer from "autoprefixer";
import postcss from "postcss";
import csso from "postcss-csso";
import cssModules from "postcss-modules";
import pluginGzip from "rollup-plugin-gzip";
import pluginStylesLit from "rollup-plugin-lit-css";
import pluginLiterals from "rollup-plugin-minify-html-literals";
import { sizeme as pluginSizeMe } from "rollup-plugin-sizeme";
import { terser as pluginTerser } from "rollup-plugin-terser";
import sass from "sass";

import buildHtml from "./src/html.js";

// Clean build dir before starting a watch or build
fs.rmSync("build", { force: true, recursive: true });
// Versions output
const { version } = JSON.parse(
  fs.readFileSync("package.json", { encoding: "utf-8" })
);
const isWatch = process.env.ROLLUP_WATCH === "true";

export default {
  input: "src/app.ts",
  output: {
    chunkFileNames: `[name]-${version}.js`,
    compact: true,
    dir: "build",
    entryFileNames: `[name]-${version}.js`,
    sourcemap: isWatch,
  },
  plugins: [
    pluginTypescript(),
    pluginResolve(),
    pluginStylesLit({
      include: ["**/*.scss"],
      transform: async (_, { filePath }) => {
        const compiled = sass.compile(filePath).css;
        return postcss([
          autoprefixer(),
          csso({
            comments: false,
          }),
          cssModules({
            generateScopedName: "[contenthash:base64:3]",
          }),
        ])
          .process(compiled, { from: filePath })
          .then((result) => result.css);
      },
    }),
    pluginJSON(),
    pluginTerser({
      compress: {
        booleans_as_integers: true,
        drop_console: !isWatch,
        ecma: 2021,
        hoist_funs: true,
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
        module: true,
        toplevel: true,
      },
      module: true,
    }),
    pluginLiterals(),
    pluginHTML({
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
