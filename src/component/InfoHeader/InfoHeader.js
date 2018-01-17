import React, { Component } from 'react'
import Subtitle from '../../component/Subtitle/Subtitle'
import { formatTimeStamp } from '../../common/js/util'
import './InfoHeader.styl'

function renderCoverImg(playlist) {
  return (
    <div className="cover-img">
      <img src={playlist.coverImgUrl} alt="pic" />
      <p className="play-count">
        <i className="icon-headphones" />
        {playlist.playCount}
      </p>
    </div>
  )
}

function renderCreator(playlist) {
  return (
    <div className="creator">
      <div className="creator-avatar"><img src={playlist.creator.avatarUrl} alt="creator-avatar" /></div>
      <div className="creator-nickname">{playlist.creator.nickname}</div>
      <div className="create-time">{formatTimeStamp(playlist.createTime)}创建</div>
    </div>
  )
}

function renderOperationBtns(playlist) {
  return (
    <div className="operation-buttons">
      <a><i className="icon-folder-plus" />收藏({playlist.subscribedCount})</a>
      <a><i className="icon-spinner9" />评论({playlist.commentCount})</a>
      <a><i className="icon-share2" />分享({playlist.shareCount})</a>
      <a><i className="icon-folder-download" />下载全部</a>
      <a>~更多</a>
    </div>
  )
}

class Header extends Component {
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
  };

  render() {
    const { playlist } = this.props; // eslint-disable-line
    return (
      <div>
        <Subtitle title="歌单" />
        <div className="info-header">
          {renderCoverImg(playlist)}
          <div className="info-header-right">
            <p className="title">{playlist.name}</p>
            {renderCreator(playlist)}
            {renderOperationBtns(playlist)}
            <div className="tags">标签：
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


export default Header
