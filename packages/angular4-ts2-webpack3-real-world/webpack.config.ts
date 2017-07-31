import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
declare const __dirname: string;

const PORT: number = 2222;

const config: webpack.Configuration = {
  entry: {
    app: path.resolve(__dirname, 'src/main.ts'),
    vendor: [
      '@angular/core',
      '@angular/common',
      '@angular/forms',
      '@angular/http',
      '@angular/router',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      'rxjs'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist/',
    filename: 'scripts/[name].[hash:16].js',
    // chunkFilename: '[name]-chunk.js',
    pathinfo: true,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [
          /node_modules/,
          /\.(spec|e2e)\.ts$/
        ],
        use: [
          'awesome-typescript-loader',
          {
            loader: 'angular2-template-loader',
            options: {
              keepUrl: false
            }
          }
        ]
      },
      {
        test: /\.(html|css)$/,
        use: [
          'raw-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                alias: {
                  '@angular': path.resolve(__dirname, 'node_modules/@angular'),
                  'material-design-icons': path.resolve(__dirname, 'node_modules/material-design-icons')
                }
              }
            }
          ]
        })
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  },

  devtool: 'source-map',

  devServer: {
    //开发时，模块的根路径
    contentBase: path.resolve(__dirname, 'src'),
    port: PORT,
    host: '0.0.0.0',
    historyApiFallback: false,
    noInfo: false,
    stats: 'minimal'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'styles/[name].[contenthash:16].css'
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: Infinity
    // }),
    //解决打包编译时，循环依赖的错误
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, '../src')
    )
  ]
}

export default config;
