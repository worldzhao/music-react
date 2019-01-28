import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { links } from '@router'
import { Icon } from 'antd'
import { initStarredList } from '../../common/store/actionCreators'
import CollectBlock from './CollectBlock'
import './style.styl'

@withRouter
@connect(
  state => ({
    starredList: state.playQueue.starredList,
  }),
  {
    initStarredList,
  },
)
export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true,
    }
  }

  componentDidMount() {
    this.props.initStarredList()
  }

  setMenuClass = isShow => (isShow ? 'soul-menu' : 'soul-menu soul-menu__hide')

  setMenuIconType = isShow => (isShow ? 'menu-fold' : 'menu-unfold')

  toggleMenu = () => {
    this.setState({
      isShow: !this.state.isShow,
    })
  }

  render() {
    const { isShow } = this.state
    const { starredList } = this.props
    return (
      <div className={this.setMenuClass(isShow)}>
        <Icon type={this.setMenuIconType(isShow)} onClick={this.toggleMenu} />
        <nav>
          <ul className="nav-list">
            {links.map(link => (
              <li>
                <NavLink to={link.path} key={link.path}>
                  <Icon type={link.icon} />
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        {isShow ? <CollectBlock starredList={starredList} /> : null}
      </div>
    )
  }
}
