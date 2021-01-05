# babel 案例

## index.js
### 简述
测试 demo1 <br>
依靠 `@babel/parser`、 `@babel/traverse`、 `@babel/generator` 实现的 babel 插件整个工作原理流程的测试案例

### 运行指令
``` shell
node index.js
```

## core.js
### 简述
测试 demo2 <br>
依靠 `@babel/core` 实现的 babel 插件测试案例，提取出 `visitor`， 可传参、可本地测试。

### 运行指令
``` shell
node core.js
```

## 参考文档
[Babel](https://www.babeljs.cn/docs/)

[JavaScript抽象语法树AST](https://github.com/yacan8/blog/blob/master/posts/JavaScript%E6%8A%BD%E8%B1%A1%E8%AF%AD%E6%B3%95%E6%A0%91AST.md)

[AST反混淆之路——babel基本知识及常用转换操作](https://blog.csdn.net/qq_41392887/article/details/108218164)

[手把手教你如何写自定义babel代码转换](https://blog.csdn.net/jennieji/article/details/100839305)

[Babel Ast Explorer](https://lihautan.com/babel-ast-explorer/#?eyJiYWJlbFNldHRpbmdzIjp7InZlcnNpb24iOiI3LjQuNSJ9LCJ0cmVlU2V0dGluZ3MiOnsiaGlkZUVtcHR5Ijp0cnVlLCJoaWRlTG9jYXRpb24iOnRydWUsImhpZGVUeXBlIjp0cnVlLCJoaWRlQ29tbWVudHMiOnRydWV9LCJjb2RlIjoiZnVuY3Rpb24gZ3JlZXQobmFtZSkge1xuICByZXR1cm4gJ0hlbGxvICcgKyBuYW1lO1xufVxuXG5jb25zb2xlLmxvZyhncmVldCgndGFuaGF1aGF1JykpOyJ9)