import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as Merge from 'webpack-merge';

import webpackCommonConfig from './webpack.common';
declare const __dirname: string;

const config: webpack.Configuration = Merge(webpackCommonConfig, {

  entry: {
    vendor: [
      '@angular/core',
      '@angular/common',
      '@angular/forms',
      '@angular/http',
      '@angular/router',
      '@angular/material',
      '@angular/animations',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      'rxjs'
    ]
  },

  output: {
    filename: 'scripts/[name].[hash:16].js',
    publicPath: '/'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'styles/[name].[contenthash:16].css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]

});

export default config;
