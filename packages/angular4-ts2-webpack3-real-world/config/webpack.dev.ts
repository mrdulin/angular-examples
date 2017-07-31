import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackCommonConfig from './webpack.common';
import * as Merge from 'webpack-merge';
declare const __dirname: string;

const PORT: number = 2222;

const config: webpack.Configuration = Merge(webpackCommonConfig, {

  output: {
    filename: 'scripts/[name].js',
    pathinfo: true
  },

  devtool: 'cheap-module-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
    port: PORT,
    host: '0.0.0.0',
    historyApiFallback: false
  },

  module: {
    rules: [
      {
        test: /\.async\.(html|css)$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]

});

export default config;
