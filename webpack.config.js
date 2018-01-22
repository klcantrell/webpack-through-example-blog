const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
	entry: {
		app: path.join(__dirname, 'src/js/index.js')
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "[name].bundle.js"
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
	            	modules: false,
	            }]
	          ]
	        }
	      }
	    },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          },
          'extract-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'responsive-loader',
          options: {
            sizes: [300],
            placeholder: true,
            placeholderSize: 50,
            name: 'imgs/[name]-[width].[ext]'
          }
        }
      }
    ]
	},
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new ImageminPlugin({test: /\.(png|jpg|gif)$/})
  ]
}