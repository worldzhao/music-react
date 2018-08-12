import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { Routes, Links } from '../router'
import NotFound from '../views/404'
import HeadBar from './header'
import Player from './player'
import Menu from './menu'
import './style.styl'

const BasicLayout = () => (
  <div className="basic-layout">
    <HeadBar />
    <div className="content">
      <Menu>{Links}</Menu>
      <div className="views">
        <Switch>
          <Redirect from="/" exact to="/findmusic/playlist" />
          {Routes}
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
    <Player />
  </div>
)

export default BasicLayout
