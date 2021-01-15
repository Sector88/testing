// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"],
//     mainFields: ["main", "module", "browser"],
//   },
//   entry: "./app.tsx",
//   target: "electron-renderer",
//   devtool: "source-map",
//   module: {
//     rules: [
//       {
//         test: /\.(js|ts|tsx)$/,
//         exclude: /node_modules/,
//         loader: "babel-loader",
//         options: {
//         presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
//       },
//       },
//     ],
//   },
//   devServer: {
//     contentBase: path.join(__dirname, "../dist/renderer"),
//     historyApiFallback: true,
//     compress: true,
//     hot: true,
//     port: 4000,
//     publicPath: "/",
//   },
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "js/[name].js",
//   },
//   plugins: [new HtmlWebpackPlugin()],
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: { 
    extensions: [".tsx", ".ts", ".js", '.jsx' ],
    mainFields: ["main", "module", "browser"],

  },
  entry: "./app.tsx",
  target: "electron-renderer",
  devtool: "source-map",

  module: {
    rules: [
    {
      test: /\.(js|jsx|ts|tsx)$/,
      // Exclude node modules because majority are ES5 compatible and it will save time to not go through all the modules to check for compatibility.
      exclude: /node_modules/,
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript" ],
      },
    },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist/renderer"),
    historyApiFallback: true,
    hot: true
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  plugins: [new HtmlWebpackPlugin()],
};