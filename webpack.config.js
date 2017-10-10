var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/app/index',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',

  resolve:{
    extensions:['.js','.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ["react", "env"],
            "env": {
              "development": {
              "plugins": [
                ["react-transform", {
                 "transforms": [{
                   "transform": "react-transform-hmr",
                   
                   "imports": ["react"],
                   
                   "locals": ["module"]
                 }]
                }],
                ["transform-async-to-generator"],
                ["import", { libraryName: "antd", style: "css" }]
              ]
              }
            }
          }
        }
      },
      {
        test: /\.(css|less)?$/, 
        use: [
            'style-loader',
            { 
                loader: 'css-loader', 
                options: { 
                    importLoaders: 1 
                } 
            },
            'postcss-loader',
            'less-loader'
        ]
      },
      {
          test: /\.(jpg|jpeg|gif|bmp|png|webp)?$/i,
          exclude: /(node_modules|bower_components)/,
          loader: 'file-loader'
      },
      {
          test: /\.(woff|woff2|svg|ttf|eot)?$/i,
          exclude: /(node_modules|bower_components)/,
          loader: 'file-loader'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}