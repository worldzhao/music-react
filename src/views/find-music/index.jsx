import React from 'react'
import { Route, NavLink, Redirect, withRouter } from 'react-router-dom'
import Subtitle from '../../component/subtitle/'
import SpecialPage from './specicl-page/'
import SongCardPage from './songcard-page/'
import './style.styl'

const NavTab = (props) => {
  const { navlist } = props
  return (
    <div className="navtab">
      <ul className="items">
        {navlist.map(v => (
          <li key={v.path} className="item">
            <NavLink to={v.path}>{v.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FindMusic(props) {
  const { match } = props
  const { pathname } = props.location
  const navlist = [
    {
      path: `${match.url}/specialpage`,
      text: '个性推荐',
      component: SpecialPage,
    },
    {
      path: `${match.url}/playlist`,
      text: '歌单',
      component: SongCardPage,
    },
  ]

  return (
    <div className="findMusic">
      {pathname === '/findmusic' ? <Redirect to="/findmusic/playlist" /> : null}
      <Subtitle title="发现音乐" />
      <NavTab navlist={navlist} />
      <div className="level2-views">
        {navlist.map(v => <Route key={v.path} path={v.path} component={v.component} />)}
      </div>
    </div>
  )
}

export default withRouter(FindMusic)
