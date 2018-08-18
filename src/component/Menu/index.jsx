import React, { Component } from 'react'
import { Icon } from 'antd'
import { connect } from 'react-redux'
import { initStarredList } from '../../common/store/actionCreators'
import CollectBlock from './CollectBlock'
import './style.styl'

@connect(
  state => ({
    starredList: state.playQueue.starredList,
  }),
  {
    initStarredList,
  },
)
export default class Drawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true,
    }
  }

  componentDidMount() {
    this.props.initStarredList()
  }

  setMenuClass = isShow => (isShow ? 'menu' : 'menu hide')

  setMenuIconType = isShow => (isShow ? 'menu-fold' : 'menu-unfold')

  toggleMenu = () => {
    this.setState({
      isShow: !this.state.isShow,
    })
  }

  render() {
    const { isShow } = this.state
    const { children, starredList } = this.props
    return (
      <div className={this.setMenuClass(isShow)}>
        <Icon type={this.setMenuIconType(isShow)} onClick={this.toggleMenu} />
        <div className="drawer-block">
          <ul className="items">
            {React.Children.map(children, link => <li className="item">{link}</li>)}
          </ul>
        </div>
        {isShow ? <CollectBlock starredList={starredList} /> : null}
      </div>
    )
  }
}
