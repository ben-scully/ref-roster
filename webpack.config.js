module.exports = {
  entry: "./js/script.js",
  output: {
      path: __dirname,
      filename: "/public/js/bundle.js"
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     loader: 'jshint-loader'
    //   }
    // ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.jade$/,
        loader: "jade"
      }
      // ,
      // { test: /\.css$/,
      //   loader: "style!css"
      // }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  },
  watch: true
}
