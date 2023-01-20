## 贪吃蛇 demo

> 用于巩固 TS 的语法与面向对象编程思想

使用 TypeScript + Webpack + Less 实现

### **项目依赖**

TypeScript：

- typescript；
- ts-loader；

Webpack：

- webpack；
- webpack-cli；
- webpack-dev-server；
- html-webpack-plugin；
- clean-webpack-plugin；

Babel：

- core-js；
- babel-loader；
- @babel/core；
- @babel/preset-env；

Less & CSS资源：

- style-loader；
- css-loader；
- less；
- less-loader；
- postcss；
- postcss-loader；
- postcss-preset-env；

### **项目使用**

#### **编译运行**

在确保已经正确安装node和npm的前提下：

分别执行下面的命令安装依赖并编译项目：

```
# 安装依赖
npm i
# 编译打包
npm run build
```

编译完成后，使用浏览器打开dist目录下的`index.html`即可游玩；
