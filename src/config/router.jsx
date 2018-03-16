import React from 'react'
import { Route, Switch } from 'react-router-dom'
// 按路由拆分代码
import Loadable from 'react-loadable'
import Loading from '../component/loading/'

const createLoadableComp = path => Loadable({
  loader: () => import(`../views/${path}/`),
  loading: Loading,
})
// 此处有两种对象，一种是Link以及对应Route都要使用的信息对象，例如toplist
// 一种是Route使用的信息对象，例如artistinfo
export const routeInfo = [
  {
    title: null,
    items: [
      {
        index: 1,
        path: '/search',
        text: '搜索',
        title: '搜索',
        icon: 'icon-search',
        component: createLoadableComp('search'),
      },
      {
        index: 2,
        path: '/findmusic',
        text: '发现音乐',
        title: '发现音乐',
        icon: 'icon-music',
        component: createLoadableComp('find-music'),
      },
      {
        index: 3,
        path: '/toplist',
        text: '排行榜',
        title: '排行榜',
        icon: 'icon-star-full',
        component: createLoadableComp('toplist'),
      },
      {
        index: 4,
        path: '/latestsong',
        text: '最近播放',
        title: '最近播放',
        icon: 'icon-clock',
        component: createLoadableComp('latest-song'),
      },
      {
        index: 5,
        path: '/favomusic',
        text: '我喜欢的音乐',
        title: '我喜欢的音乐',
        icon: 'icon-heart',
        component: createLoadableComp('favo-music'),
      },
      {
        index: 6,
        path: '/about',
        text: '关于',
        title: '关于',
        icon: 'icon-users',
        component: createLoadableComp('about'),
      },
      {
        index: 7,
        path: '/playlistinfo/:id',
        component: createLoadableComp('playlist-info'),
      },
      {
        index: 8,
        path: '/artistinfo/:id',
        component: createLoadableComp('artist-info'),
      },
    ],
  },
  // 这一部分作为收藏歌单的标题
  {
    title: '收藏的歌单',
    items: [],
  },
]

export const Routes = () => {
  let RouteContainer = []
  routeInfo.forEach((route) => {
    const { items } = route
    const block = items.map(v => (
      <Route key={v.path} path={v.path} component={v.component} />
    ))
    RouteContainer = [...RouteContainer, ...block]
  })
  return <Switch>{RouteContainer}</Switch>
}
