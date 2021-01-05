const babel = require('@babel/core')
const myCustomPlugin = require('./visitor')

const code = `
  function greet(name) {
    return 'Hello ' + name;
  }
  console.log(greet('tanhauhau')); // Hello tanhauhau
`

const output = babel.transformSync(code, {
  plugins: [
    [myCustomPlugin, {
      method: 'test'
    }]
  ]
})

console.log(output.code);