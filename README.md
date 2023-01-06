### 备注信息：
安装webpack `pnpm install webpack webpack-cli -D`
在package.json 中创建 script脚本  

```
{
//...
  "scripts":{
    "build": "webpack"
  },
}
```

创建webpack.config.js文件，配置如下：
```
const path = require('path')

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname,"./dist")
  }
}

```

可以使用`webpack --config xx.config.js`命令来指定webpack的配置文件。
```
{
//...
  "scripts":{
    "build": "webpack --config xx.config.js"
  },
}
```