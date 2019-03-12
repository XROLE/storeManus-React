const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'src'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
          ],
        },
      ],
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'src'),
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin(
        {
          template: './src/index.html',
        },
      ),
    ],
  };
};
