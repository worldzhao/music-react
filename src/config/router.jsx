import React from 'react'
import { Route, Switch } from 'react-router-dom'
// 按路由拆分代码
import Loadable from 'react-loadable'
import Loading from '../component/loading/index'

const AsyncFindMusic = Loadable({
  loader: () => import('../views/find-music/index'),
  loading: Loading,
})
const AsyncPlaylistInfo = Loadable({
  loader: () => import('../views/playlist-info/index'),
  loading: Loading,
})
const AsyncToplist = Loadable({
  loader: () => import('../views/toplist/index'),
  loading: Loading,
})
const AsyncArtistInfo = Loadable({
  loader: () => import('../views/artist-info/index'),
  loading: Loading,
})
const AsyncLatestSong = Loadable({
  loader: () => import('../views/latest-song/index'),
  loading: Loading,
})
const AsyncSearch = Loadable({
  loader: () => import('../views/search/index'),
  loading: Loading,
})
const AsyncFavoMusic = Loadable({
  loader: () => import('../views/favo-music/index'),
  loading: Loading,
})
const AsyncAbout = Loadable({
  loader: () => import('../views/about/index'),
  loading: Loading,
})

// 此处有两种对象，一种是显式路由以及对应的组件，例如findmusic，是要做导航渲染的Link
// 一种是仅仅是组件，没有导航，只是渲染Route,例如artistinfo
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
        component: AsyncSearch,
      },
      {
        index: 2,
        path: '/findmusic',
        text: '发现音乐',
        title: '发现音乐',
        icon: 'icon-music',
        component: AsyncFindMusic,
      },
      {
        index: 3,
        path: '/toplist',
        text: '排行榜',
        title: '排行榜',
        icon: 'icon-star-full',
        component: AsyncToplist,
      },
      {
        index: 4,
        path: '/latestsong',
        text: '最近播放',
        title: '最近播放',
        icon: 'icon-clock',
        component: AsyncLatestSong,
      },
      {
        index: 5,
        path: '/favomusic',
        text: '我喜欢的音乐',
        title: '我喜欢的音乐',
        icon: 'icon-heart',
        component: AsyncFavoMusic,
      },
      {
        index: 6,
        path: '/about',
        text: '关于',
        title: '关于',
        icon: 'icon-users',
        component: AsyncAbout,
      },
      {
        index: 7,
        path: '/playlistinfo/:id',
        component: AsyncPlaylistInfo,
      },
      {
        index: 8,
        path: '/artistinfo/:id',
        component: AsyncArtistInfo,
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
