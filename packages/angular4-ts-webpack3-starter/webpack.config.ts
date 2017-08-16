import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
declare const __dirname: string;

const PORT: number = 2222;
const env: string = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const plugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html'
  }),
  new webpack.ContextReplacementPlugin(
    /angular(\\|\/)core(\\|\/)@angular/,
    path.resolve(__dirname, '../src')
  ),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(env)
    }
  })
];

if (env === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      mangle: {
        screw_ie8: true
      },
      compress: {
        unused: true,
        dead_code: true,
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        drop_console: true,
        sequences: true,
        booleans: true,
        screw_ie8: true,
        warnings: false
      },
      comments: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'polyfills'],
      chunks: ['app'],
      minChunks: module => /node_modules/.test(module.resource)
    }),
    new CopyWebpackPlugin([
      { from: './src/contacts.json' }
    ])
  )
}

const config: webpack.Configuration = {
  entry: {
    app: path.resolve(__dirname, env === 'production' ? 'src/main-aot.ts' : 'src/main.ts'),
    vendor: path.resolve(__dirname, 'src/vendor.ts'),
    polyfills: path.resolve(__dirname, 'src/polyfills.ts')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: env === 'production' ? 'scripts/[name].[chunkhash:16].js' : '[name].bundle.js',
    pathinfo: env === 'development'
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [
          /node_modules/,
          /\.(spec|e2e)\.ts$/
        ],
        use: [
          'ts-loader',
          'angular2-template-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)\??.*$/,
        loader: 'url-loader',
        query: {
          limit: '8192',
          name: 'images/[name].[hash:16].[ext]'
        }
      },
      {
        test: /\.(html|css)$/,
        use: 'raw-loader',
        exclude: /\.async\.(html|css)$/
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

  plugins
}

export default config;
