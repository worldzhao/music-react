import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { initStarredList } from '../../../common/store/actionCreators'
import './style.styl'

@connect(
  state => ({
    starredList: state.playQueue.starredList,
  }),
  {
    initStarredList,
  },
)
export default class StarredBlock extends Component {
  componentDidMount() {
    this.props.initStarredList()
  }
  // re-render 优化test
  shouldComponentUpdate(nextProps) {
    // console.log(this.props.starredList === nextProps.starredList)
    // false 引用类型 所以PureComponent会失效  扩展:immutable.js
    return !(this.props.starredList.length === nextProps.starredList.length)
  }
  render() {
    const items = this.props.starredList
    return (
      <div className="starred-block">
        {items.length ? (
          <ul className="items">
            {items.map(item => (
              <li key={item.id} className="item">
                <Link to={{ pathname: `/playlistinfo/${item.id}` }}>
                  {item.name}
                  <img src={item.coverImgUrl} alt="thunmb-img" />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="nolist-info">还没有收藏歌单哦~</p>
        )}
      </div>
    )
  }
}
