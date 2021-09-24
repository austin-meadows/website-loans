const path = require("path");
const zlib = require("zlib");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const paths = {
  dist: path.resolve("dist"),
  src: path.resolve("src"),
};

module.exports = {
  devServer: {
    compress: true,
    historyApiFallback: true,
  },
  devtool: false,
  entry: {
    index: {
      dependOn: "lit",
      import: path.resolve(paths.src, "index.ts"),
    },
    lit: "lit",
  },
  mode: "production",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts?$/,
        use: "ts-loader",
      },
    ],
  },
  optimization: {
    chunkIds: "total-size",
    mangleExports: "size",
    mangleWasmImports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 2020,
          compress: {
            arguments: true,
            booleans_as_integers: true,
            drop_console: true,
            ecma: 2020,
            keep_fargs: false,
            module: true,
            passes: 3,
            unsafe: true,
            unsafe_comps: true,
            unsafe_math: true,
            unsafe_methods: true,
            unsafe_proto: true,
            unsafe_regexp: true,
            unsafe_undefined: true,
          },
          mangle: {
            eval: true,
            module: true,
            toplevel: true,
            properties: {
              regex: /_$/,
            },
          },
        },
      }),
    ],
    moduleIds: "size",
    providedExports: true,
    runtimeChunk: {
      name: "runtime",
    },
    splitChunks: {
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
        },
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },
      chunks: "all",
      enforceSizeThreshold: 50000,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      minChunks: 1,
      minRemainingSize: 0,
      minSize: 20000,
    },
  },
  output: {
    chunkLoadingGlobal: "wp",
    filename: "js/[name].[chunkhash].bundle.js",
    path: paths.dist,
    publicPath: "/",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CompressionPlugin({
      filename: "[path][base].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$\.svg$/,
      threshold: 0,
      minRatio: 0.8,
    }),
    new CompressionPlugin({
      filename: "[path][base].br[query]",
      algorithm: "brotliCompress",
      test: /\.js$|\.css$|\.html$\.svg$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 0,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(paths.src, "index.html"),
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
    modules: [paths.src, "node_modules"],
  },
  target: "browserslist",
};
