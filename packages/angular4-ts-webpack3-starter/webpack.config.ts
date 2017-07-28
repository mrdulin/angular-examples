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
    filename: '[name].bundle.js',
    pathinfo: true
  },

  devtool: "source-map",

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
    contentBase: path.resolve(__dirname, 'src'),
    port: PORT,
    host: '0.0.0.0',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      src: path.resolve(__dirname, 'src'),
      shared: path.resolve(__dirname, 'src/shared')
    }
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
