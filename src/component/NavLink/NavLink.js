import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import './NavLink.styl'

function NavLink(props) {
  const { navlist } = props
  return (
    <div className="navlink">
      <ul className="items">
        {
            navlist.map(v => <li key={v.path} className="item"><Link to={v.path}>{v.text}</Link></li>)
          }
      </ul>
    </div>
  )
}

export default withRouter(NavLink)
