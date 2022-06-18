const path = require('path')
const babel = require('@babel/core')
const t = require('@babel/types')
const template = require("@babel/template").default
const generate = require("@babel/generator").default


const code = "class Example    {}; export { Example};";
const ast = babel.parse(code); // @babel/parser

const output = generate(
	ast, {
		auxiliaryCommentAfter: '/*后面添加注释*/', // 要配合 preset-env 才能用, 这两个参数不明确，作者想删除它们
		auxiliaryCommentBefore: '前面的注释',
		comments: true,
		compact: true, // 紧凑，会删除没用的空格 为 true 会避免增加空白字符串用于格式化, 可选 boolean | 'auto
		concise: true, // 设为 true 可以减少空白字符，Example { 之间保留一个空格
		decoratorsBeforeExport: true, 
		// filename   // 用于警告信息中
		// jsescOption: 
		// minified // 压缩

	},
	code
);

console.log(output.code)
// {
//   code: 'class Example {}',
//   decodedMap: undefined,
//   map: [Getter/Setter],
//   rawMappings: [Getter/Setter]
// }