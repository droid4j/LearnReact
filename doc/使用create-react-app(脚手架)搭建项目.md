# 使用create-react-app(脚手架)搭建项目

##1下载并启动项目

1) create-react-app是react官方提供的用于搭建基于react-webpack+es6项目的脚手架

2) 操作

全局下载工具

$ npm install -g create-react-app

下载模板项目

$ create-react-app react-admin-client

进入项目

$ cd react-admin-client

启动项目

$ npm start

启动成功后，会出下以下界面：

```shell
Compiled successfully!

You can now view react-admin-client in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://172.16.64.231:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

访问

localhost:3000

## 2打包发布项目

编译

$ npm run build

编译中会有以下提示：

```shell
> react-admin-client@0.1.0 build /Users/per4j/learn_react/LearnReact/code/react-admin-client
> react-scripts build

Creating an optimized production build...
```

当看到`Compiled successfully.`表示编译完成

安装静态服务端

$ npm install -g serve

运行

$ serve build

build指的是上面打包后的build文件夹

运行完成后，会看到以下提示信息：

```shell
   ┌───────────────────────────────────────────────────┐
   │                                                   │
   │   Serving!                                        │
   │                                                   │
   │   - Local:            http://localhost:5000       │
   │   - On Your Network:  http://172.16.64.231:5000   │
   │                                                   │
   │   Copied local address to clipboard!              │
   │                                                   │
   └───────────────────────────────────────────────────┘
```

访问

http://localhsot:5000