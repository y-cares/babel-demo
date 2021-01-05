module.exports = ({ types: t }) => {
  return {
    visitor: {
      // 在StringLiteral外嵌套一个BinaryExpression
      StringLiteral(path) {
        const concat = path.node.value
          .split('')
          .map(c => t.stringLiteral(c))
          .reduce((prev, curr) => {
            return t.binaryExpression('+', prev, curr)
          })
        path.replaceWith(concat)
        path.skip() // path.skip()来跳过对当前路径子节点的访问
      },
      // 转换变量名 反转这个name
      // state：表示代码和插件的状态，一般通过该对象访问插件的配置项。 
      Identifier(path, state) {
        if (
          !(
            path.parentPath.isMemberExpression() &&
            path.parentPath
              .get('object')
              .isIdentifier({ name: 'console' }) &&
            path.parentPath.get('property').isIdentifier({ name: 'log' })
          )
        ) {
          path.node.name = path.node.name
            .split('')
            .reverse('')
            .join('')
        }
      }
    }
  }
}