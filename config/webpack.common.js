const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src", "index.js")
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "https://matheus.li/blog/wp-content/themes/matheus/dist/"
  },
  devServer: {
    port: 3042,
    historyApiFallback: true,
    overlay: true,
    open: true
  },
  module: {
    rules: [
      {
        test: require.resolve("url-polyfill"),
        use: "imports-loader?this=>window"
      },
      {
        test: require.resolve("snapsvg"),
        use: "imports-loader?this=>window,fix=>module.exports=0"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        ]
      },
      {
        test: /.*\.(gif|png|jp(e*)g)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 21000,
              name: "images/[name]_[hash:7].[ext]"
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "../node_modules"),
        use: ["style-loader", "css-loader"]
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
  plugins: [
    new HtmlWebPackPlugin({
      cache: true,
      template: path.resolve(__dirname, "../public", "index.html"),
      inject: "head"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      snapsvg: path.resolve(
        __dirname,
        "../node_modules/snapsvg/dist/snap.svg.js"
      )
    }
  }
};
