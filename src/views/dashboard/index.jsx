import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import './style.styl'
import { Routes } from '../../config/router'
import HeadBar from './header/index'
import Player from './player/index'
import Drawer from './drawer/index'

const Dashboard = (props) => {
  const { pathname } = props.location
  return (
    <div className="dashboard">
      {pathname === '/' ? <Redirect to="/findmusic/playlist" /> : null}
      <HeadBar />
      <div className="content">
        <Drawer />
        <div className="views">
          <Routes />
        </div>
      </div>
      <Player />
    </div>
  )
}

export default withRouter(Dashboard)
