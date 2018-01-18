import React from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import './style.styl'
import { Routes } from '../../config/router'
import NavBar from './header/index'
import Player from './player/index'
import Drawer from './drawer/index'

function Dashboard(props) {
  const { pathname } = props.location
  return (
    <div className="dashboard">
      {pathname === '/' ? <Redirect to="/findmusic/playlist" /> : null}
      <NavBar />
      <div className="content">
        <Drawer />
        <div className="views">
          <Switch>
            <Routes />
          </Switch>
        </div>
      </div>
      <Player />
    </div>
  )
}

export default withRouter(Dashboard)
