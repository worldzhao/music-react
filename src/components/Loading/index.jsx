import React, { Component } from 'react'
import ReactLoading from 'react-loading'
import './index.styl'

export default class Loading extends Component {
  state = {}
  render() {
    const { type = 'bars', color = '#bc2f2e', loading = true } = this.props
    return (
      <div className="loading">
        {loading ? (
          <ReactLoading type={type} color={color} height="10%" width="10%" />
        ) : null}
      </div>
    )
  }
}
