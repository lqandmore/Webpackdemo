const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')


module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname,"./dist")
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test:/\.s[ca]ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test:/\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader"

        ]
      },
      // {
      //   test:/\.(jpe?g|png|svg|gif)$/,
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       limit: 100 * 1024,
      //       name: "img/[name]_[hash:6].[ext]",
      //       // outputPath:"img"
      //     }
      //   }
      // },
      {
        test:/\.(jpe?g|png|svg|gif)$/,
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 20 *1024
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf)$/,
        type: "asset/resource",
        generator: {
          filename:"font/[name]_[hash:6][ext]"
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:"webpack案例",
      template: "./public/index.html"
    }),
    new DefinePlugin({
          BASE_URL: '"./"'
    })

  ]
}