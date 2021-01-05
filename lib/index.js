const parser = require('@babel/parser');

const traverse = require('@babel/traverse');

const generate = require('@babel/generator'); // const t = require('@babel/types')


const code = `function sequare(n) {
  return n * n
}`;
const ast = parser.parse(code, {
  sourceType: 'module'
});
const visitor = {
  enter(path) {
    // 节点转换
    if (path.isIdentifier({
      name: 'n'
    })) {
      path.node.name = 'x';
    }
  }

};
traverse(code, visitor);
console.log(generate(ast));