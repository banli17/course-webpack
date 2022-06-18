const path = require('path')
const babel = require('@babel/core')
const t = require('@babel/types')
const template = require("@babel/template").default
const generate = require("@babel/generator").default

// 支持三种插入变量的写法: %%, 大些变量, es6 ${} 直接插入
// 测试 template
const buildRequire = template.smart(`
  var %%importName%% = require(%%source%%);
`);
const ast = buildRequire({
	importName: t.identifier("myModule"), // 变量
	source: t.stringLiteral("my-module"), // 字符串
});
console.log(generate(ast).code); // var myModule = require("my-module");

// 测试字符串变量
const from = `from`
const buildRequire2 = template.statements(`
	import IMPORT_NAME ${from} 'SOURCE';
	console.log('hello');
`);
const ast2 = buildRequire2({
	IMPORT_NAME: t.identifier("myClass"), // 变量
	SOURCE: t.stringLiteral("./my-class"), // 字符串, 会用引号的内容去替换代码，所有上面的 A 要加引号
});
console.log(ast2)
console.log(generate(ast2).code); // import myClass from "my-class";