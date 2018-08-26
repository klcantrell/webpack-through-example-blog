const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
	entry: {
		app: path.join(__dirname, 'src/js/index.js')
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: "[name].bundle.js",
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
								// Babel can ignore import statements since webpack is taking care of it
	            	modules: false,
	            }],
						],
						plugins: [
							'syntax-dynamic-import',
						],
	        },
	      },
	    },
			{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      use: [
					'style-loader',
					'css-loader',
				],
	    },
    ],
	},
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
		}),
		new CleanWebpackPlugin([path.join(__dirname, 'public')]),
  ]
}
