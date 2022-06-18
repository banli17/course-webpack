const path = require('path')
const babel = require('@babel/core')
const t = require('@babel/types')
const template = require("@babel/template").default
const generate = require("@babel/generator").default

function testTraverse() {
	const ast = babel.parse(`
		class Example {}
	`) // @babel/parser
	babel.traverse(ast, {

	})
}

testTraverse()