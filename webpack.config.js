const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}
console.log(mode + " mode");

module.exports = {
  mode: mode,
  entry: {
    scripts: "./src/index.js",
    user: "./src/user.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  devServer: {
    open: true,
    static: {
      directory: "./src",
      watch: true,
    },
  },
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: "asset/resource",
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: {
          //     presets: ['@babel/preset-env']
          // }
        },
      },
    ],
  },
};

// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const path = require("path");

// let mode = "development";
// if (process.env.NODE_ENV === "production") {
//   mode = "production";
// }

// console.log(mode + " mode");

// module.exports = {
//   target: "web",
//   devServer: {
//     liveReload: false,
//     open: true,
//     // hot: true,
//     static: {
//       directory: "./src",
//       watch: true,
//     },
//   },
//   mode: mode,
//   entry: {
//     scripts: "./src/index.js",
//     // user: "./src/user.js",
//   },
//   output: {
//     filename: "[name].[contenthash].js",
//     // assetModuleFilename: "assets/[hash][ext][query]",
//     assetModuleFilename: "assets/images/[name][ext]",
//     clean: true,
//   },
//   devtool: "source-map",
//   optimization: {
//     splitChunks: {
//       chunks: "all",
//     },
//   },
//   plugins: [
//     new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
//     new HtmlWebpackPlugin({
//       template: "./src/index.html",
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.html$/i,
//         loader: "html-loader",
//       },
//       {
//         test: /\.(sa|sc|c)ss$/,
//         use: [
//           mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
//           "css-loader",
//           {
//             loader: "postcss-loader",
//             options: {
//               postcssOptions: {
//                 plugins: [
//                   [
//                     "postcss-preset-env",
//                     {
//                       //Options
//                     },
//                   ],
//                 ],
//               },
//             },
//           },
//           "sass-loader",
//         ],
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: "asset/resource",
//       },
//       {
//         test: /\.(woff|woff2|eot|ttf|otf)$/i,
//         type: "asset/resource",
//       },
//       {
//         test: /\.pug$/,
//         loader: "pug-loader",
//         exclude: /(node_modules|bower_components)/,
//       },
//       {
//         test: /\.m?js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           // options: {
//           //   presets: ["@babel/preset-env"],
//           // },
//         },
//       },
//     ],
//   },
// };
