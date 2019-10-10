``` bash
// 安装react react-dom
yarn add react react-dom
```

``` bash
// 安装reactUI库 -- antd, babel-plugin-import是配合antd使用, 可以实现按需加载, 防止打包后的文件过大
yarn add antd
yarn add -D babel-plugin-import
```

```bash
// 安装webpack   
yarn add -D webpack webpack-cli
```

``` bash
// 安装js / jsx 处理loader   babel的配置可以写在.babelrc 或  babel.config.js 或 在package.json中添加 "babel" 字段
yarn add -D babel-loader @babel/core @babel/preset-env @babel/preset-react
```

``` bash
// 安装css处理loader 
yarn add -D css-loader

// 根据处理后的css存放位置不同
// 把css存放在js中, 当页面加载时, js会把样式写入页面的style标签中
yarn add -D style-loader
// 把css存放在单独的css文件中 
// mini-css-extract-plugin用于webpack4以上的版本, 
// extract-text-webpack-plugin用于4以下的版本
yarn add -D mini-css-extract-plugin
yarn add -D extract-text-webpack-plugin
// 如果使用sass
yarn add -D node-sass sass-loader
// 如果使用less
yarn add -D less less-loader
```


