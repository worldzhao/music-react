import React, { Component } from 'react'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import './style.styl'
import NavBar from './navbar/index'
import Player from './player/index'
import Drawer from './drawer/index'

import FindMusic from '../../views/find-music/index'
import PlaylistInfo from '../../views/playlist-info/index'
import LatestSong from '../../views/latest-song/index'

function Search() {
  return (
    <h1>搜索</h1>
  )
}

function Toplist() {
  return (
    <h1>排行榜</h1>
  )
}

function FavoMusic() {
  return (
    <h1>我喜欢的音乐</h1>
  )
}

function About() {
  return (
    <h1>关于</h1>
  )
}

function ArtistInfo() {
  return (
    <h1>歌手信息</h1>
  )
}
function renderRoutes(routeInfo) {
  let Routes
  routeInfo.forEach((route) => {
    const { items } = route
    Routes = items.map(v => (
      <Route key={v.path} path={v.path} component={v.component} />
    ))
  })
  return Routes
}

class Dashboard extends Component {
  getTitle = (routeInfo) => {
    let title
    const { pathname } = this.props.location;// eslint-disable-line
    routeInfo.forEach((route) => {
      const matchPath = route.items.find(v => pathname.indexOf(v.path) !== -1)
      if (matchPath) {
        title = matchPath.title; // eslint-disable-line
      }
    })
    return title
  };

  render() {
    // 此处有两种对象，一种是显式路由以及对应的组件，例如findmusic，是要做导航渲染的Link
    // 一种是仅仅是组件，没有导航，只是渲染Route,例如artistinfo
    const routeInfo = [{
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
      }, {
        index: 8,
        path: '/artistinfo',
        component: ArtistInfo,
      }],
    }]
    const { pathname } = this.props.location
    return (
      <div className="dashboard">
        {pathname === '/' ? <Redirect to="/findmusic/playlist" /> : null}
        <NavBar title={this.getTitle(routeInfo)} />
        <div className="content">
          <Drawer routeInfo={routeInfo} />
          <div className="views">
            <Switch>
              {
                renderRoutes(routeInfo)
              }
            </Switch>
          </div>
        </div>
        <Player />
      </div>
    )
  }
}

export default withRouter(Dashboard)
