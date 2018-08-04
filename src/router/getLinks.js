import React from 'react'
import { NavLink } from 'react-router-dom'

export default (links) => {
  const Links = links.map(r => (
    <NavLink to={r.path} key={r.path}>
      <i className={r.icon} />
      {r.title}
    </NavLink>
  ))
  return Links
}
