# music-react

> 本项目基于[violet-cli](https://github.com/worldzhao/violet-cli)移动端项目模板生成
> UI 参考：[mango-music](https://github.com/code-mcx/mango-music)
> API 来源：[NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

欢迎 star ✨

PC 端代码见分支`feature/pc`，代码 emmm...，刚接触 react 的时候写的，一言难尽。

## 基本命令

```
yarn start | yarn dev 启动开发环境
yarn build       打包生产环境
yarn build:analyze    进行打包分析
```

## 技术栈

- 开发语言：typescript
- 基础库：react(with hooks)
- UI 库：[dora-ui](https://github.com/worldzhao/dora-ui)
- 状态管理：[rematch](https://github.com/rematch/rematch)
- 移动端布局：rem 布局(使用 post-css 插件使用)
- 其他：[immer.js](https://github.com/immerjs/immer)

## 性能（体验）优化

- 代码分割（`code splitting`）：基于`React.lazy`与`Suspense`（为了加快开发环境热更新速度，使用[babel-plugin-dynamic-import-node](https://github.com/airbnb/babel-plugin-dynamic-import-node)将 `import()`转义为 `require()`）；
- 图片懒加载：带图列表场景较多，使用 [react-lazyload](https://github.com/twobin/react-lazyload) 实现图片懒加载；
- 减少 `re-render`：immer.js 搭配 PureComponent/React.memo/React.useMemo 减少父组件`render`所导致的子组件无意义 `re-render`（tips：可使用 [react-devtools](https://github.com/facebook/react-devtools) 查看组件 render 状态，点击右上角 ⚙ 即可配置）；
- 长缓存（long-term caching）：基于 `content hash` 生成打包文件名，非覆盖发布配合长缓存提高用户体验（推荐阅读：[大公司里怎样开发和部署前端代码？](https://www.zhihu.com/question/20790576/answer/32602154)）；
- 滚动：基于 better-scroll 封装 Scroll 组件以提供接近原生的滚动体验（参考：[mango-music](https://github.com/code-mcx/mango-music)，推荐阅读：[React 全家桶构建一款 Web 音乐 App 实战（三）：推荐页开发及公用组件封装](https://juejin.im/post/5a3a6c12f265da4325297408)）；
- 动画：基于 react-transition-group 实现路由切换动画与其他细节动画（推荐阅读：[一次 react-router + react-transition-group 实现转场动画的探索](https://juejin.im/post/5cb1e4275188251ace1feee9)）；
- loading 闪烁：极短时间内的 loading 会一闪而过，体验较差。此处结合`@rematch/loading`插件以及 dora-ui 中的 Spin 组件 delay 属性进行优化。

## 其他

- husky: eslint/commit lint
- dev: proxy/mock
