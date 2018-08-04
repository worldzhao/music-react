# music-react

> 前言：在七月份初学 vue 的时候，用 vue 全家桶做了一个音乐播放器，那是我学前端的第四个月，不懂工程构建/项目构建/代码规范/模块复用的思想，也能运行，功能也颇为完善，但是最近翻看其代码的时候实在惨不忍睹，于是删除了 git 仓库，用 react 重构了一遍，更加注重模块划分以及项目构建，并且引入了 eslint 与 editorconfig 规范自己的代码，目前还未重构完成。

![推荐歌单.png](http://upload-images.jianshu.io/upload_images/4869616-d24aa08f95605b93.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![歌单详情.png](http://upload-images.jianshu.io/upload_images/4869616-4a367530230faed0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![播放详情.png](https://upload-images.jianshu.io/upload_images/4869616-4adbc1a037a854b6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 项目简介

该项目由 [Create React App](https://github.com/facebookincubator/create-react-app) 搭建.

[Github 地址](https://github.com/worldzhao/music-react)

1.  工程构建：[Create React App](https://github.com/facebookincubator/create-react-app)

2.  项目搭建：

    1.  views: views 目录用于存放项目功能模块的页面，需要根据路由配置情况以及页面复杂程度大小分割子级目录
    2.  config: config 目录存放一些配置目录，比如 API 信息，路由配置等
    3.  store: store 目录用于整合 views 中的 store
    4.  components: components 目录用于存放非业务组件，或者在多个业务间都需要用到的功能组件
    5.  common: common 目录用于存放一些公共 css 以及 js 工具方法

3.  部分第三方库：

    1.  基础框架: react
    2.  前端路由: react-router[-dom] v4
    3.  数据管理: redux / react-redux / redux-thunk
    4.  网络请求: axios
    5.  css 预处理器: stylus
    6.  字体图标: icomoon

4.  代码规范:

    1.  eslint: airbnb (可参见根目录下的.eslintrc 文件)
    2.  缩进空行等设置可参见项目根目录.editorconfig 文件

5.  API:

    1.  [AD`s API](https://api.imjad.cn/cloudmusic.md)
    2.  部分 API 由我室友爬虫完成
    3.  使用详情参见`src/config/api.js`文件

![api.png](http://upload-images.jianshu.io/upload_images/4869616-8b1a851e3275acf5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 暂未重构完成

1.  ~~歌手详情~~
2.  ~~排行榜~~
3.  ~~收藏歌单~~
4.  ~~歌词滚动~~
5.  我喜欢的音乐

## TODO

1.  ~~使用修饰器语法优化 connect~~
2.  封装 message 组件
3.  ~~封装轮播图组件~~[react-tiny-swiepr](https://github.com/worldzhao/react-tiny-swiper)
4.  性能优化
    - ~~路由按需加载~~
    - 动画优化
    - 服务端渲染

## 本地运行

```bash
git clone https://github.com/worldzhao/music-react.git

cd music-react

npm install

npm start
```

每学到一点新知识，新思想，我都会来改进这个项目，欢迎 fork 和 star，如果你正在学习 react，通过一个比较综合的项目来实战也还是非常不错的。

[Github 地址](https://github.com/worldzhao/music-react)

[我的博客](https://worldzhao.github.io/archives/)
