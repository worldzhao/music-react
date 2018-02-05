import React, { Component } from 'react'
import DrawerBlock from '../drawer-block/index'
import StarredBlock from '../starred-block/index'
import { routeInfo } from '../../../config/router'
import './style.styl'

export default class Drawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true,
    }
  }

  toggleDrawer = () => {
    this.setState({
      isShow: !this.state.isShow,
    })
  };

  render() {
    const { isShow } = this.state
    return (
      <div className={`drawer ${isShow ? '' : 'hide'}`}>
        <i className="icon-menu" onClick={this.toggleDrawer} />
        {routeInfo.map(route => <DrawerBlock key={route.title} route={route} isShow={isShow} />)}
        <StarredBlock />
      </div>
    )
  }
}
