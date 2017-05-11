const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const index = path.resolve('./src');
const distDir = path.resolve('./dist');

module.exports = {
	entry: {
		'static/js': index
	},
	output: {
		path: distDir,
		publicPath: '',
		filename: '[name]/index.[hash:4].js',
		chunkFilename: '[name]/[id].js'
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
				use: ['file-loader?name=[name].[ext]&limit=1024&outputPath=static/img/']
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
		new ExtractTextPlugin("static/css/style.[hash:4].css"),
	],

	devServer: {
		historyApiFallback: true,
		hot: false,
		inline: true,
		port: 2333
	},
}