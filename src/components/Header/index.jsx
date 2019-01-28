import React from 'react'
import { withRouter } from 'react-router-dom'
import { Icon } from 'antd'
import { links } from '@router'
import './style.styl'

@withRouter
export default class Header extends React.Component {
  get title() {
    const { pathname } = this.props.location
    const matchMenus = links.filter(v => pathname.includes(v.path))
    return (matchMenus[0] && matchMenus[0].title) || 'SoulBeats'
  }

  goBack = () => {
    const { history } = this.props
    history.goBack()
  }

  render() {
    return (
      <header className="soul-header">
        <h1 className="logo">
          <Icon type="arrow-left" onClick={this.goBack} />
          <span>{this.title}</span>
        </h1>
      </header>
    )
  }
}
