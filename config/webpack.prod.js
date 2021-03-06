const merge = require("webpack-merge");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const common = require("./webpack.common.js");

const enableBundleAnalyzer = process.env.ENABLE_ANALYZER === "true";

module.exports = merge(common, {
  output: {
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "https://matheus.li/blog/wp-content/themes/matheus/dist/"
  },
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, { loader: "css-loader" }]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2|svg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets",
              publicPath:
                "https://matheus.li/blog/wp-content/themes/matheus/dist/assets"
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    },
    runtimeChunk: false
  },
  plugins: [
    new HtmlWebPackPlugin({
      cache: true,
      template: path.resolve(__dirname, "../public", "index.html"),
      inject: "head"
    }),
    new CleanWebpackPlugin({
      verbose: true,
      dry: false
    }),
    new OptimizeCssAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
      chunkFilename: "[id].[hash:8].css"
    }),
    new ManifestPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: enableBundleAnalyzer === true ? "static" : "disabled",
      openAnalyzer: true
    })
  ]
});
