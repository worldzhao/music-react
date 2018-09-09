import React, { Component } from 'react'
import { Icon } from 'antd'
import './index.styl'

export default class Spin extends Component {
  state = {}
  render() {
    return (
      <div className="spin">
        <Icon type="loading" />
      </div>
    )
  }
}
