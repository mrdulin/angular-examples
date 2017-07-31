import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as Merge from 'webpack-merge';
declare const __dirname: string;

const context: string = path.resolve(__dirname, '../');
console.log(context);

const config: webpack.Configuration = {
  context,

  entry: {
    app: './src/main.ts'
  },

  output: {
    path: path.resolve(__dirname, '../dist')
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@angular': path.resolve(__dirname, '../node_modules/@angular'),
      'material-design-icons': path.resolve(__dirname, '../node_modules/material-design-icons')
    }
  },

  module: {
    rules: [
      {
        test: /\.(html|css)$/,
        use: 'raw-loader',
        exclude: /\.async\.(html|css)$/
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
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
