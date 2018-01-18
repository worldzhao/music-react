import React from 'react'
import {
  Route,
} from 'react-router-dom'

import FindMusic from '../views/find-music/index'
import PlaylistInfo from '../views/playlist-info/index'
import LatestSong from '../views/latest-song/index'
import Search from '../views/search/index'
import Toplist from '../views/toplist/index'
import FavoMusic from '../views/favo-music/index'
import About from '../views/about/index'
import ArtistInfo from '../views/artist-info/index'

// 此处有两种对象，一种是显式路由以及对应的组件，例如findmusic，是要做导航渲染的Link
// 一种是仅仅是组件，没有导航，只是渲染Route,例如artistinfo
export const routeInfo = [{
  title: null,
  items: [{
    index: 1,
    path: '/search',
    text: '搜索',
    title: '搜索',
    icon: 'icon-search',
    component: Search,
  }, {
    index: 2,
    path: '/findmusic',
    text: '发现音乐',
    title: '发现音乐',
    icon: 'icon-music',
    component: FindMusic,
  },
  {
    index: 3,
    path: '/toplist',
    text: '排行榜',
    title: '排行榜',
    icon: 'icon-star-full',
    component: Toplist,
  },
  {
    index: 4,
    path: '/latestsong',
    text: '最近播放',
    title: '最近播放',
    icon: 'icon-clock',
    component: LatestSong,
  },
  {
    index: 5,
    path: '/favomusic',
    text: '我喜欢的音乐',
    title: '我喜欢的音乐',
    icon: 'icon-heart',
    component: FavoMusic,
  },
  {
    index: 6,
    path: '/about',
    text: '关于',
    title: '关于',
    icon: 'icon-users',
    component: About,
  },
  {
    index: 7,
    path: '/playlistinfo',
    component: PlaylistInfo,
  },
  {
    index: 8,
    path: '/artistinfo',
    component: ArtistInfo,
  }],
}]

export const Routes = () => {
  let RouteContainer
  routeInfo.forEach((route) => {
    const { items } = route
    RouteContainer = items.map(v => (
      <Route key={v.path} path={v.path} component={v.component} />
    ))
  })
  return RouteContainer
}
