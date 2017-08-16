* angular4-ts-webpack2

__功能特性:__

* 打包生成`gzip`压缩文件，本地测试可以通过`http-server`的`-g`参数开启服务器`gzip`支持。
* `AOT`编译，`yarn run build:aot`生成`aot`编译文件。
* 经过`AOT`编译后，`yarn run build`进行生产环境打包，使用静态引导启动引用。
* 模板和`css`中图片静态资源路径，通过`require`的方式在组件`ts`文件中导入，目的是为了使图片资源经过`webpack`的`url-loader`，
文件大小小于`8kb`的图片会被转换成`base64` `url`，大于`8kb`的图片，在给文件名加入`hash`后缀后直接拷贝至`dist`目录。

__问题总结：__

* `typescript`使用`import`导入模块`webpack` `resolve.alias`中指定的模块，需要在`tsconfig.json`中设置`baseUrl`和`paths`
注意`alias`中的路径，`path.resolve(__dirname, '/src/shared')`是会报错的，应该是`path.resolve(__dirname, 'src/shared')`

* `aot`编译成功后，使用`webpack`打包报错, 问题解决: https://github.com/angular/material2/issues/6490.
