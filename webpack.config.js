const path = require('path')

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
      //   type: "asset",
      //   generator: {
      //     filename: "img/[name]_[hash:6][ext]"
      //   },
      // }
    ]
  }
}