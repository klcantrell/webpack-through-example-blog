const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
	entry: {
		app: path.join(__dirname, 'src/js/index.js')
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: "[name].bundle.js"
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
	          ]
	        }
	      }
	    },
    ]
	},
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ]
}