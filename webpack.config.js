const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const index = path.resolve('./src');
const distDir = path.resolve('./dist');

module.exports = {
	entry: index,
	output: {
		path: distDir,
		// publicPath: 'static',
		filename: 'index.js',
	},
	resolve: {
		alias: {
			DEMO: path.resolve('./src/demo'),
			CONF: path.resolve('./src/conf'),
			LIB: path.resolve('./src/lib'),
			CSS: path.resolve('./src/css'),
		}
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$|\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ['css-loader?minimize', 'sass-loader']
				})
			},
			{
				test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
				use: ['file-loader?limit=1024']
			},
			{
				test: /template\.html?$/,
				use: ['html-loader']
			},
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve('./index.html'),
			inject: 'body',
			hash: true
		}),
		new ExtractTextPlugin("style.css"),
	],

	devServer: {
		historyApiFallback: true,
		hot: false,
		inline: true,
		port: 2333
	},
}