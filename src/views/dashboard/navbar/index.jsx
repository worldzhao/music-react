import React from 'react'
import { withRouter } from 'react-router-dom'
import './style.styl'

function NavBar(props) {
  const title = props.title ? props.title : 'SoulBeats'
  return (
    <div className="navbar">
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

export default withRouter(NavBar)
