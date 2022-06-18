const path = require('path')

module.exports = {
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist'),
		iife: false,
	},
	optimization: {
		minimize: false,
		runtimeChunk: false
	}
}