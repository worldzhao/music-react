import React, { Component } from 'react'
import { Icon } from 'antd'
import CollectBlock from './CollectBlock'
import './style.styl'

export default class Drawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true,
    }
  }

  setMenuClass = isShow => (isShow ? 'menu' : 'menu hide')

  setMenuIconType = isShow => (isShow ? 'menu-fold' : 'menu-unfold')

  toggleDrawer = () => {
    this.setState({
      isShow: !this.state.isShow,
    })
  }

  render() {
    const { isShow } = this.state
    const { children } = this.props
    return (
      <div className={this.setMenuClass(isShow)}>
        <Icon type={this.setMenuIconType(isShow)} onClick={this.toggleDrawer} />
        <div className="drawer-block">
          <ul className="items">
            {React.Children.map(children, link => <li className="item">{link}</li>)}
          </ul>
        </div>
        {isShow ? <CollectBlock /> : null}
      </div>
    )
  }
}
