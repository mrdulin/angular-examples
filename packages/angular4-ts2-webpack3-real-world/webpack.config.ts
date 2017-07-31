import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
declare const __dirname: string;

const PORT: number = 2222;

const config: webpack.Configuration = {
  entry: {
    app: path.resolve(__dirname, 'src/main.ts')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    pathinfo: true,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
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
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  },

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
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    //解决打包编译时，循环依赖的错误
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, '../src')
    )
  ]
}

export default config;
