import React from 'react'
import { withRouter } from 'react-router-dom'
import { Icon } from 'antd'
import menuInfo from '../../router/menu'
import './style.styl'

const getTitle = (m, p) => {
  const matchMenu = m.filter(v => p.indexOf(v.path) !== -1)
  return (matchMenu[0] && matchMenu[0].title) || 'SoulBeats'
}

@withRouter
export default class Header extends React.Component {
  goBack = () => {
    const { history } = this.props
    history.goBack()
  }

  render() {
    const { pathname } = this.props.location
    const title = getTitle(menuInfo, pathname)
    return (
      <header>
        <div className="left">
          <Icon type="arrow-left" onClick={this.goBack} />
          <h2 className="title">{title}</h2>
        </div>
        <Icon type="close" className="right" />
      </header>
    )
  }
}
