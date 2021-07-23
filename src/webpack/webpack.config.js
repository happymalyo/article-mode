const path = require('path');

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'url-loader', 'html-loader'],
      },
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: 'assets/ressources',
     },
    ],
    loaders: [
        {
          //IMAGE LOADER
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader:'url-loader'
        },
        {
          // HTML LOADER
          test: /\.html$/,
          loader: 'html-loader'
        }
    ]
  },
};