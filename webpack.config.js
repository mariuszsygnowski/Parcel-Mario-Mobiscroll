const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "static")
  },
  devServer: {
    proxy: {
      "/parcelmonkey/*": {
        target: "http://localhost:8080/",
        secure: "false"
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: require.resolve("babel-loader")
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: require.resolve("babel-loader")
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|png|svg|jpg|gif)$/,
        use: ["url-loader?limit=100000"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "views/index.html")
    })
  ]
};
