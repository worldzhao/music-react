import React, { Fragment } from 'react'
import './index.styl'

export default function Loading(props) {
  const { loading, children } = props
  return (
    <Fragment>
      <div className="loading-wrapper">
        {children}
        {loading && <div className="loading" />}
      </div>
    </Fragment>
  )
}
