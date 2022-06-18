const path = require('path')
const babel = require('@babel/core')
const t = require('@babel/types')
const template = require("@babel/template").default
const generate = require("@babel/generator").default

module.exports = {
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist'),
	},
	mode: 'production',
	optimization: {
		minimize: false,
	}
}

