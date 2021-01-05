const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default

const code = `function sequare(n) {
  return n * n
}`

const ast = parser.parse(code, {
  sourceType: 'module'
})

const visitor = {
  // state：表示代码和插件的状态，一般通过该对象访问插件的配置项。 
  enter(path, state) {
    // console.log(path)
    // 节点转换
    if (path.isIdentifier({name: 'n'})) {
      path.node.name = 'x'
    }
  }
}

traverse(ast, visitor)

const { code: new_code } = generate(ast)
console.log(new_code)