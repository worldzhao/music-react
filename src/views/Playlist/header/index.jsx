import React, { Component } from 'react'
import { Icon } from 'antd'
import MinorTitle from '@components/MinorTitle'
import { formatTimeStamp } from '@src/utils'
import './style.styl'

const renderCreator = playlist => (
  <div className="creator">
    <span className="creator-avatar">
      <img src={playlist.creator.avatarUrl} alt="creator-avatar" />
    </span>
    <span className="creator-nickname">{playlist.creator.nickname}</span>
    <span className="create-time">{formatTimeStamp(playlist.createTime)}创建</span>
    <span className="play-count">🎧 {playlist.playCount}</span>
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
    this.props.beforeStar()
  }

  beforeCancelStar = () => {
    this.props.beforeCancelStar()
  }

  renderCollectBtn = id =>
    (checkStarred(id) ? (
      <a onClick={this.beforeCancelStar}>
        <Icon type="heart" /> 取消收藏
      </a>
    ) : (
      <a onClick={this.beforeStar}>
        <Icon type="heart-o" /> 收藏
      </a>
    ))

  render() {
    const { playlist } = this.props
    const {
      coverImgUrl, name, description, tags,
    } = playlist
    const { id } = playlist
    return (
      <div>
        <MinorTitle>歌单</MinorTitle>
        <div className="info-header">
          <div className="cover-img">
            <img src={coverImgUrl} alt="cover-img" />
          </div>
          <div className="right">
            <p className="title">{name}</p>
            {renderCreator(playlist)}
            <div className="operation-buttons">{this.renderCollectBtn(id)}</div>
            <div className="tags">
              标签：
              {tags.map(v => <span key={v}>{v}</span>)}
            </div>
            <div className="playlist-desc" onClick={this.toggleDesc}>
              <p className={this.state.showDesc ? 'show' : 'more'}>{description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
