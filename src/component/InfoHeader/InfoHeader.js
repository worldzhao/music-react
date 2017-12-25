import React, {Component} from 'react';
import './InfoHeader.styl';

class InfoHeader extends Component {
  render() {
    const {playlist} = this.props;
    console.log(playlist);
    return (
      <div className="info-header">
        <div className="cover">
          <img src={playlist.coverImgUrl}/>
          <div className="count"><span><i className="icon-headphones"/>{playlist.playCount}</span></div>
        </div>

        <div className="others">
          <p className="title">{playlist.name}</p>

          <div className="creator">
            <div className="creator-avatar"><img src={playlist.creator.avatarUrl} alt="creator-avatar"/></div>
            <div className="creator-nickname">{playlist.creator.nickname}</div>
            <div className="create-time">{playlist.creator.createTime}创建</div>
          </div>

          <div className="btns">
            <a><i className="icon-folder-plus"/>收藏({playlist.subscribedCount})</a>
            <a href="javascript:void(0)"><i className="icon-spinner9"/>评论({playlist.commentCount})</a>
            <a href="javascript:void(0)"><i className="icon-share2"/>分享({playlist.shareCount})</a>
            <a href="javascript:void(0)"><i className="icon-folder-download"/>下载全部</a>
            <a href="javascript:void(0)">~更多</a>
          </div>

          <div className="tag">标签：
            <a>{playlist.tag}</a>
          </div>
          <div className="des">
            <p>{playlist.description}</p>
          </div>

        </div>

        <p>播放全部({playlist.tracks.length})</p>
      </div>
    )
  }
}

export default InfoHeader;
