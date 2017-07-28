* angular4-ts-webpack2

__问题总结：__

* `typescript`使用`import`导入模块`webpack` `resolve.alias`中指定的模块，需要在`tsconfig.json`中设置`baseUrl`和`paths`
注意`alias`中的路径，`path.resolve(__dirname, '/src/shared')`是会报错的，应该是`path.resolve(__dirname, 'src/shared')`
