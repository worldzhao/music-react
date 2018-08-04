import React from 'react'
import { withRouter } from 'react-router-dom'
import menuInfo from '../../router/menu'
import './style.styl'

const getTitle = (m, p) => {
  const matchMenu = m.filter(v => p.indexOf(v.path) !== -1)
  return (matchMenu[0] && matchMenu[0].title) || 'SoulBeats'
}

const HeadBar = (props) => {
  const { pathname } = props.location
  const title = getTitle(menuInfo, pathname)
  return (
    <div className="headbar">
      <div className="left">
        <i
          className="icon-arrow-left"
          onClick={() => {
            props.history.goBack()
          }}
        />
        <h2 className="title">{title}</h2>
      </div>
      <div className="right">
        <i className="icon-cross" />
      </div>
    </div>
  )
}

export default withRouter(HeadBar)
