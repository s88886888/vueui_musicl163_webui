
#Vue 版仿网易云音乐，

#项目预览

#软件架构
后端使用NeteaseCloudMusicApi进行反向代理

#数据来源于网易云音乐接口

#使用技术
vue
vue-router
axios
element-ui


```shell
npm install
npm run serve
```




# 网易云音乐 API

网易云音乐 Node.js API service

<p>
<a href="https://www.npmjs.com/package/NeteaseCloudMusicApi"><img src="https://img.shields.io/npm/v/NeteaseCloudMusicApi.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/NeteaseCloudMusicApi"><img src="https://img.shields.io/npm/l/NeteaseCloudMusicApi.svg" alt="License"></a>
<a href="https://www.npmjs.com/package/NeteaseCloudMusicApi"><img src="https://img.shields.io/david/dev/binaryify/NeteaseCloudMusicApi.svg" alt="devDependencies" ></a>
<a href="https://www.npmjs.com/package/NeteaseCloudMusicApi"><img src="https://img.shields.io/david/binaryify/NeteaseCloudMusicApi.svg" alt="devDependencies" ></a>
<a href="https://codeclimate.com/github/Binaryify/NeteaseCloudMusicApi"><img src="https://codeclimate.com/github/Binaryify/NeteaseCloudMusicApi/badges/gpa.svg" /></a>
</p>

## 灵感来自

[disoul/electron-cloud-music](https://github.com/disoul/electron-cloud-music)

[darknessomi/musicbox](https://github.com/darknessomi/musicbox)

[sqaiyan/netmusic-node](https://github.com/sqaiyan/netmusic-node)

[greats3an/pyncm](https://github.com/greats3an/pyncm)


## 环境要求

需要 NodeJS 8.12+ 环境

## 安装

```shell

$ git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git 

$ npm install
```

或者
```shell
$ git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git

$ npm install
```

## 运行

```shell
$ node app.js
```

服务器启动默认端口为 3000,若不想使用 3000 端口,可使用以下命令: Mac/Linux

```shell
$ PORT=4000 node app.js
```

windows 下使用 git-bash 或者 cmder 等终端执行以下命令:

```shell
$ set PORT=4000 && node app.js
```


## 使用文档

[文档地址](https://binaryify.github.io/NeteaseCloudMusicApi) 

[文档地址2](https://neteasecloudmusicapi.vercel.app)

![文档](https://raw.githubusercontent.com/Binaryify/NeteaseCloudMusicApi/master/static/docs.png)


