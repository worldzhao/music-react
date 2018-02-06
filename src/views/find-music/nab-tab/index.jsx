import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import './style.styl'

const NavTab = (props) => {
  const { navlist } = props
  return (
    <div className="navtab">
      <ul className="items">
        {navlist.map(v => (
          <li key={v.path} className="item">
            <Link to={v.path}>{v.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default withRouter(NavTab)
