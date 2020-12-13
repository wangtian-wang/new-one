

#### base-config-prettier

###### 项目中使用vutur的时候，使用prettier的方式格式化代码

```js
在package.json文件中设置
 {
   "vetur.format.defaultFormatterOptions": {
      "prettier": {
        "semi": false,
        "singleQuote": true,
         "trailingComma": "es5", // 对象或数组最后一个元素不添加逗号
            /* 在对象属性添加空格 */
  			 "bracketSpacing": true,
      },
      "wrap_attributes": "force-aligned"
    },
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatter.html": "js-beautify-html" 
}

在根目录下面新增加.prettierrc.json
{
	"singleQuote":true,//使用单引号而不是双引号,true就是对
	"semi":false//在语句结尾处打印分号,false就是不打印
},
  
  
在eslint 设置prettier格式化代码的方式
1: npm i eslint-config-prettier eslint-plugin-prettier
2 .eslintrc.json
{
  "extends": ["plugin: prettier/recommened"]
}



 在vscode的setting.json中添加以下代码。
/* 关闭编辑器自带保存格式化功能，此功能会用Vetur进行格式化。*/
"editor.formatOnSave": false，
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
/*  设置不同语言的保存方式   */
"[javascript]": {
  "editor.formatOnSave": true
}

"editor.wordWrap": "wordWrapColumn", // 超长代码一般出现在html中, 我不喜欢html属性换行, 但是又想看到全部, 那就只能设置编辑器视觉上的换行了.
"editor.wordWrapColumn": 150, // 编辑器将在每行的单词数目达到这个数字以后换行
  
  
  
  
  1、安装插件 eslint-plugin-vue

1

npm i -g eslint-plugin-vue

2、修改项目跟路径下的文件：.eslint.js
   
plugin：[
  'html',
  'vue'
]

添加vue选项
3 下载 eslint vetur

setting.json
"eslint.autoFixOnSave": true,
"eslint.validate": [

    "javascript",{

        "language": "vue",

        "autoFix": true

    }, {
      
       "language": "html",

        "autoFix": true
      
    },
    "vue"
],


```



#### base-config-vscode

#### base-config 

```js
通用的配置，可以参考
{
 // vscode默认启用了根据文件类型自动设置tabsize的选项
 "editor.detectIndentation": false,
 // 重新设定tabsize
 "editor.tabSize": 2,
 // #每次保存的时候自动格式化 
 "editor.formatOnSave": true,
 // #每次保存的时候将代码按eslint格式进行修复
 "eslint.autoFixOnSave": true,
 // 添加 vue 支持
 "eslint.validate": [
  "javascript",
  "javascriptreact",
  {
   "language": "vue",
   "autoFix": true
  }
 ],
 // #让prettier使用eslint的代码格式进行校验 
 "prettier.eslintIntegration": true,
 // #去掉代码结尾的分号 
 "prettier.semi": false,
 // #使用带引号替代双引号 
 "prettier.singleQuote": true,
 // #让函数(名)和后面的括号之间加个空格
 "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
 // #这个按用户自身习惯选择 
 "vetur.format.defaultFormatter.html": "js-beautify-html",
 // #让vue中的js按编辑器自带的ts格式进行格式化 
 "vetur.format.defaultFormatter.js": "vscode-typescript",
 "vetur.format.defaultFormatterOptions": {
  "js-beautify-html": {
   "wrap_attributes": "force-aligned"
   // #vue组件中html代码格式化样式
  }
 },
 // 格式化stylus, 需安装Manta's Stylus Supremacy插件
 "stylusSupremacy.insertColons": false, // 是否插入冒号
 "stylusSupremacy.insertSemicolons": false, // 是否插入分好
 "stylusSupremacy.insertBraces": false, // 是否插入大括号
 "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
 "stylusSupremacy.insertNewLineAroundBlocks": false,
 "window.zoomLevel": 0 // 两个选择器中是否换行
}
项目中的.eslintrc.js
// https://eslint.org/docs/user-guide/configuring

module.exports = {
 root: false,
 parserOptions: {
  parser: 'babel-eslint'
 },
 env: {
  browser: true
 },
 extends: [
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  'plugin:vue/essential',
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  'standard'
 ],
 // required to lint *.vue files
 plugins: ['vue'],
 // add your custom rules here
 rules: {
  // allow async-await
  'generator-star-spacing': 'off',
  // allow debugger during development
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
   eqeqeq: 'off', // 不能始用==
  'no-unused-vars': 'off', // 消除未使用的变量
  'no-undef': 'off', // 未使用变量报错
  'no-unreachable': 'off' // 不能执行的代码检测
   //此处一下还可以根据个人习惯设置更多个性化内容
 }
}
```

