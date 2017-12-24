import React, {Component} from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import './Dashboard.styl';
import NavBar from '../NavBar/NavBar'
import Player from '../Player/Player'
import Drawer from '../Drawer/Drawer'

import FindMusic from '../../container/FindMusic/FindMusic'
import PlaylistInfo from '../../container/PlaylistInfo/PlaylistInfo'
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

function LatestSong() {
  return (
    <h1>最近播放</h1>
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

class Dashboard extends Component {
  getTitle = (routeInfo) => {
    let title;
    const pathname = this.props.location.pathname;
    routeInfo.forEach((route) => {
      let matchpath;
      if (matchpath = route.items.find(v => pathname.indexOf(v.path) !== -1)) {
        title = matchpath.title;
      }
    });
    return title;
  };

  render() {
    const routeInfo = [{
      title: null,
      items: [{
        index: 1,
        path: '/search',
        text: '搜索',
        title: '搜索',
        icon: 'icon-search',
        component: Search
      }, {
        index: 2,
        path: '/findmusic',
        text: '发现音乐',
        title: '发现音乐',
        icon: 'icon-music',
        component: FindMusic
      },
        {
          index: 3,
          path: '/toplist',
          text: '排行榜',
          title: '排行榜',
          icon: 'icon-star-full',
          component: Toplist
        },
        {
          index: 4,
          path: '/latestsong',
          text: '最近播放',
          title: '最近播放',
          icon: 'icon-clock',
          component: LatestSong
        },
        {
          index: 6,
          path: '/favomusic',
          text: '我喜欢的音乐',
          title: '我喜欢的音乐',
          icon: 'icon-heart',
          component: FavoMusic
        },
        {
          index: 6,
          path: '/about',
          text: '关于',
          title: '关于',
          icon: 'icon-users',
          component: About
        },
        {
          index:7,
          path:'/playlistinfo',
          component:PlaylistInfo
        }]
    }];

    return (
      <div className="dashboard">
        <NavBar title={this.getTitle(routeInfo)}/>
        <div className="content">
          <Drawer routeInfo={routeInfo}/>
          <div className="views">
            <Switch>
              {
                renderRoutes(routeInfo)
              }
            </Switch>
          </div>
        </div>
        <Player/>
      </div>
    )
  }
}

function renderRoutes(routeInfo) {
  let Routes;
  routeInfo.forEach((route) => {
    const {items} = route;
    Routes = items.map((v) => (
      <Route key={v.path} path={v.path} component={v.component}/>
    ));
  });
  return Routes;
}

export default withRouter(Dashboard);
