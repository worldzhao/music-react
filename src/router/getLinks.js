import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'antd'

export default (links) => {
  const Links = links.map(r => (
    <NavLink to={r.path} key={r.path}>
      <Icon type={r.icon} />
      {r.title}
    </NavLink>
  ))
  return Links
}
