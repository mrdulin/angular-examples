import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as CompressionPlugin from 'compression-webpack-plugin';
declare const __dirname: string;

const PORT: number = 2222;
const env: string = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const plugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html'
  }),
  new webpack.ContextReplacementPlugin(
    /angular(\\|\/)core(\\|\/)@angular/,
    path.resolve(__dirname, './src')
  ),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(env)
    }
  }),
  new CopyWebpackPlugin([
    { from: './src/contacts.json' }
  ]),
  new webpack.optimize.CommonsChunkPlugin({
    //注意顺序，否则会报错
    names: ['polyfills', 'vendor'],
    minChunks: Infinity
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
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8
    })
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
      },
      {
        test: /\.async\.(html|css)$/,
        use: [
          'style-loader',
          'css-loader'
        ]
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
      '@angular': path.resolve(__dirname, 'node_modules/@angular'),
      shared: path.resolve(__dirname, 'src/shared')
    }
  },

  plugins
}

export default config;
