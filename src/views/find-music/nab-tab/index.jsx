import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
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

export default withRouter(NavTab)
