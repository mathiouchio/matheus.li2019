const merge = require("webpack-merge");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mapStyle = process.env.MAP_STYLE === "true";

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 3042,
    historyApiFallback: true,
    overlay: true,
    open: true,
    stats: "errors-only"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: mapStyle ? "css-loader?sourceMap" : "css-loader" }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2|svg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{ loader: "file-loader" }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "../public", "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
});
