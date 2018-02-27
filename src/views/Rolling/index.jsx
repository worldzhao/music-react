import React, { Component } from 'react'
import './style.styl'

export default class Rolling extends Component {
  componentDidMount() {
    // do sth
  }
  render() {
    const { song } = this.props.playqueue
    const {
      toggleRolling, showRolling, preSong, togglePlay, nextSong, ppIcon,
    } = this.props
    const coverImg = song.al.picUrl
    return (
      <div className={showRolling ? 'rolling rolling-up' : 'rolling'}>
        <img src={coverImg} alt="bg" className="bg" />
        <div className="top-part" onClick={toggleRolling}>
          <i className="icon-arrow-left" />
          <span className="title">返回</span>
        </div>
        <div className="left-part">
          <div className={ppIcon === 'icon-play3' ? 'album-img' : 'album-img active'}>
            <img src={coverImg} alt="album-img" />
          </div>
          <div className="player-btns">
            <button className="pre-btn" onClick={preSong}><i className="icon-previous2" /></button>
            <button className="pp-btn" onClick={togglePlay}><i className={ppIcon} /></button>
            <button className="next-icon" onClick={nextSong}><i className="icon-next2" /></button>
          </div>
        </div>

        <div className="right-part">
          <div className="song-info">歌曲信息</div>
          <div className="lyric-block">歌词详情</div>
        </div>

        <div className="bottom-part">这是底部</div>
      </div>
    )
  }
}
