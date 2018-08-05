import React, { Component } from 'react'
import { connect } from 'react-redux'
import { star, cancelStar } from '../../../basicLayout/store/actionCreators'
import Subtitle from '../../../component/subtitle/'
import { formatTimeStamp } from '../../../common/js/util'
import './style.styl'

const renderCoverImg = playlist => (
  <div className="cover-img">
    <img src={playlist.coverImgUrl} alt="pic" />
    <p className="play-count">
      <i className="icon-headphones" />
      {playlist.playCount}
    </p>
  </div>
)

const renderCreator = playlist => (
  <div className="creator">
    <div className="creator-avatar">
      <img src={playlist.creator.avatarUrl} alt="creator-avatar" />
    </div>
    <div className="creator-nickname">{playlist.creator.nickname}</div>
    <div className="create-time">{formatTimeStamp(playlist.createTime)}创建</div>
  </div>
)

const checkStarred = (id) => {
  const allStarredList = JSON.parse(localStorage.getItem('allStarredList'))
  if (allStarredList) {
    for (let i = 0; i < allStarredList.length; i += 1) {
      const list = allStarredList[i]
      if (list.id === id) {
        return true
      }
    }
  }
  return false
}

@connect(
  state => ({
    starredList: state.playQueue.starredList,
  }),
  {
    star,
    cancelStar,
  },
)
export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      showDesc: false,
    }
  }

  toggleDesc = () => {
    this.setState({
      showDesc: !this.state.showDesc,
    })
  }

  beforeStar = () => {
    const { playlist } = this.props
    const { id, name, coverImgUrl } = playlist
    const parseList = {
      id,
      name,
      coverImgUrl,
    }
    this.props.star(parseList)
  }

  beforeCancelStar = () => {
    const { playlist } = this.props
    const { id } = playlist
    this.props.cancelStar(id)
  }

  render() {
    const { playlist } = this.props
    const { id } = playlist
    return (
      <div>
        <Subtitle title="歌单" />
        <div className="info-header">
          {renderCoverImg(playlist)}
          <div className="info-header-right">
            <p className="title">{playlist.name}</p>
            {renderCreator(playlist)}
            <div className="operation-buttons">
              {checkStarred(id) ? (
                <a onClick={this.beforeCancelStar}>❤️ 取消收藏</a>
              ) : (
                <a onClick={this.beforeStar}>💗 收藏</a>
              )}
            </div>
            <div className="tags">
              标签：
              {playlist.tags.map(v => <span key={v}>{v}</span>)}
            </div>
            <div className="playlist-desc" onClick={this.toggleDesc}>
              <p className={this.state.showDesc ? 'show' : 'more'}>{playlist.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
