const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: process.env.NODE_ENV || 'development',
	entry: {
		app: path.join(__dirname, 'src/js/index.js')
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: "[name].bundle.js"
	},
	node: {
		Buffer: false,
	},
  devServer: {
    open: false,
    historyApiFallback: true,
    port: 5000,
  },
	module: {
    rules: [
			{
	      test: /\.js$/,
	      exclude: /node_modules/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: [
	            ['env', {
	            	modules: false
	            }]
						],
						plugins: [
							'syntax-dynamic-import',
						]
	        }
	      }
	    },
			{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      use: [
					'style-loader',
					'css-loader',
				]
	    },
    ]
	},
	optimization: {
		splitChunks: {
			// cacheGroups: {
			// 	default: false,
			// 	vendors: false,
			// 	vendor: {
			// 		name: 'vendor',
			// 		chunks: 'all',
			// 		test: /node_modules/,
			// 		enforce: true,
			// 	},
			// 	common: {
			// 		name: 'common',
			// 		minChunks: 2,
			// 		chunks: 'async',
			// 		reuseExistingChunk: true,
			// 		enforce: true
			// 	},
			// }
		}
	},
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
		}),
		new CleanWebpackPlugin(['public']),
  ]
}