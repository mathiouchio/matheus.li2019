const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src", "index.js")
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
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
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", '.tsx', '.ts'],
    alias: {
      snapsvg: path.resolve(
        __dirname,
        "../node_modules/snapsvg/dist/snap.svg.js"
      )
    }
  }
};
