import React, { Component } from 'react'
import StarredBlock from './starred-block'
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
      <div className={`drawer ${isShow ? '' : 'hide'}`}>
        <i className="icon-menu" onClick={this.toggleDrawer} />
        <div className="drawer-block">
          <ul className="items">
            {React.Children.map(children, l => <li className="item">{l}</li>)}
          </ul>
        </div>
        {isShow ? <StarredBlock /> : null}
      </div>
    )
  }
}
