import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
declare const __dirname: string;

const PORT: number = 2222;
const publicPath: string = '/';

const config: webpack.Configuration = {
  entry: {
    app: path.resolve(__dirname, 'src/main.ts')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    pathinfo: true,
    publicPath
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
    port: PORT,
    host: '0.0.0.0',
    historyApiFallback: false,
    noInfo: false,
    stats: 'minimal',
    publicPath
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, '../src')
    )
  ]
}

export default config;
