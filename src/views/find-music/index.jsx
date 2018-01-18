import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Subtitle from '../../component/subtitle/index'
import NavLink from './nav-link/index'
import SongCardPage from './songcard-page/index'
import './style.styl'

function SpecialRec() {
  return (
    <h1>person</h1>
  )
}


function FindMusic(props) {
  const { match } = props
  const { pathname } = props.location
  const navlist = [
    {
      path: `${match.url}/specialrec`,
      text: '个性推荐',
      component: SpecialRec,
    },
    {
      path: `${match.url}/playlist`,
      text: '歌单',
      component: SongCardPage,
    }]
  return (
    <div className="findMusic">
      {pathname === '/findmusic' ? <Redirect to="/findmusic/playlist" /> : null}
      <Subtitle title="发现音乐" />
      <NavLink navlist={navlist} />
      <div className="level2-views">
        {
            navlist.map(v => (
              <Route key={v.path} path={v.path} component={v.component} />
            ))
          }
      </div>
    </div>
  )
}

export default FindMusic
