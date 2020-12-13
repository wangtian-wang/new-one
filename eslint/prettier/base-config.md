###### 基本配置
```js
 git config --global core.autolf false 将Git设置为不要转化操作。保持文件原来的样子
 .prettierrc 
  endOfLine: auto //不检查每行结束的格式
setting.son中的设置
{
    tralingComma:'es5' // 数组对象结尾不会出现逗号
    bracketSpacing: true, //  { foo: bar }
    endOfLine: auto | lf |crlf,
    embededLanguageFormatting: off // 不格式化自动识别嵌入式代码。

}
````

###### 配置文件的优先级
* .prettierrc
* .editorconfig
* setting.json

