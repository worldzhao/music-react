import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { Routes, Links } from '../router'
import HeadBar from './header'
import Player from './player'
import Menu from './menu'
import './style.styl'

const BasicLayout = (props) => {
  const { pathname } = props.location
  return (
    <div className="basic-layout">
      {pathname === '/' ? <Redirect to="/findmusic/playlist" /> : null}
      <HeadBar />
      <div className="content">
        <Menu>{Links}</Menu>
        <div className="views">{Routes}</div>
      </div>
      <Player />
    </div>
  )
}

export default withRouter(BasicLayout)
