/*

 tree-shaking : 去掉没有用的代码
 开启的条件: mode : production 2: 写的代码必须使用 es6 import 方式导入

 在 package.json 中配置:
 "sideEffects" : false  会将所有的文件都进行 tree-shaking,可能会导致 css, babel 文件被干掉
 "sideEffects" : ['*.css', ' *.less']     这些文件不能进行 tree-shaking 操作


*/
