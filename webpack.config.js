const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  devServer: {
    open: true,
    stats: "errors-only",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      template: path.resolve(__dirname, "./src/template.html"),
      filename: "index.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({ filename: "styles.css" }),
    new CleanWebpackPlugin(),
  ],
};
