import React from 'react'
import { withRouter } from 'react-router-dom'
import { routeInfo } from '../../../config/router'
import './style.styl'

const getTitle = (r, p) => {
  let title
  r.forEach((route) => {
    const matchPath = route.items.find(v => p.indexOf(v.path) !== -1)
    if (matchPath) {
      title = matchPath.title; // eslint-disable-line
    }
  })
  return title
}

function HeadBar(props) {
  const { pathname } = props.location
  const title = getTitle(routeInfo, pathname) ? getTitle(routeInfo, pathname) : 'SoulBeats'
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
