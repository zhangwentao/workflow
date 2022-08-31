const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode:	'development',
	entry: './src/index.js',
	output: {
		path: __dirname+'/dist' 
	},
	devServer: {
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				options: {
					 presets: ['@babel/preset-env','@babel/preset-react']
				}
			}
		]
	},
  plugins: [new HtmlWebpackPlugin({
	template: './src/tpl.html'
})]
}
