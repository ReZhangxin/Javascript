---
date: 2017-06-24 18:42
status: public
title: webpack
---

# 打包工具
> 把 js css 图片等打包成一个js文件

-----
webpack是前端一个工具 可以让各个模块进行加载、预处理，再进行打包，拥有Grunt和Gulp所有基本功能
* 支持commonjs和ADM模块
* 支持很多模块加载器的调用 可以用ES6编写代码
* 使用模块加载器，支持sass，less

> 下载安装`Node.js`  找一个磁盘比如说 E盘安装 `npm`
>  cmd运行-->
>  `npm install -g webpack`
>  `cd E:/wamp64/www/zhangxin` 
>  `npm init` 一路enter
>  ` npm install --save-dev webpack`
>   在`zhangxin`目录下新建`app`,`public`文件夹
>   在`public`文件夹下创建一个`index.html`
>   在`app`下建立`main.js`和`work.js`文件