import React, { Fragment } from 'react'
import './index.styl'

export default function Spin(props) {
  const { spinning, children } = props
  return (
    <Fragment>
      <div className="spin-wrapper">
        {children}
        {spinning && <div className="spin" />}
      </div>
    </Fragment>
  )
}
