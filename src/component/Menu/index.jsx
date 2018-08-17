import React, { Component } from 'react'
import CollectBlock from './CollectBlock'
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
  }

  render() {
    const { isShow } = this.state
    const { children } = this.props
    return (
      <div className={`menu ${isShow ? '' : 'hide'}`}>
        <i className="icon-menu" onClick={this.toggleDrawer} />
        <div className="drawer-block">
          <ul className="items">
            {React.Children.map(children, l => <li className="item">{l}</li>)}
          </ul>
        </div>
        {isShow ? <CollectBlock /> : null}
      </div>
    )
  }
}
