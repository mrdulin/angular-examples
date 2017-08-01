
__姿势:__

* `yarn start`启动`webpack-dev-server`（支持异步`chunk`模块加载）
* `yarn run build:dev`, 使用`webpack.dev.ts`配置编译打包出开发环境下的静态资源
* `yarn run build`, 使用`webpack.prod.ts`配置编译打包出生产环境下的静态资源

__注意：__

* AOT编译注意：https://github.com/AngularClass/angular-starter#aot-donts
* 风格指南：https://angular.cn/docs/ts/latest/guide/style-guide.html

__TODO：__

[  ] Angular2中`JIT`和`AOT`编译。使用`AOT`编译替代`JIT`编译

  https://segmentfault.com/a/1190000008739157
  https://angular.cn/docs/ts/latest/cookbook/aot-compiler.html

[  ] `sidebar`导航封装成`tree` `component`.


__流程：__

__废弃:__

[  ] 运行时动态配置路由表, 现在的方案是静态配置，编译时在`angular`内部生成路由映射 [#4234](https://github.com/angular/angular-cli/issues/4234)
