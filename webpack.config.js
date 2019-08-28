const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
        index: './src/index.jsx'
	},
	// devtool: 'inline-source-map',
	mode: 'production',
	plugins: [
		new webpack.ProvidePlugin({
            $: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
        }),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: '留给岁月一点空间',
			template: 'src/index.html',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	output: {
		path: path.resolve(__dirname,'dist'),
		// filename: "main.js",
		filename: '[name].bundle.js',
		publicPath: '/'
	},
	devServer: {
		contentBase: './dist',
		compress: true,
		port: 9000,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				resolve: {
				  extensions: [".jsx"]
				},
				use: {
					loader: 'babel-loader',
					options: {
						plugins: ['@babel/plugin-transform-react-jsx']
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader','css-loader','sass-loader']
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				use: ['url-loader']
			},
			{
				test: /\.(ttf|woff|woff2|eot|otf)$/,
				use: ['file-loader']
			},
			{
				test: /\.(mkv|mp4|mp3|flac|avi)$/,
				use: ['file-loader']
			},
			{
				test: /\.csv$/,
				use: ['csv-loader']
			},
			{
				test: /\.xml$/,
				use: ['xml-loader']
			},
			{
				test: /\.(txt)$/,
				use: ['raw-loader']
			}
		],
	},
}