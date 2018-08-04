import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchLyric } from './store/actionCreators'
import LyricBlock from './lyric/'
import './style.styl'

@connect(
  state => ({ lyric: state.lyric }),
  { fetchLyric },
)
export default class Rolling extends Component {
  componentDidMount() {
    this.props.fetchLyric(this.props.playQueue.song.id)
  }
  componentWillReceiveProps(nextProps) {
    const { id } = nextProps.playQueue.song
    const preId = this.props.playQueue.song.id
    if (id !== preId) {
      nextProps.fetchLyric(id)
    }
  }
  render() {
    const { song } = this.props.playQueue
    const {
      toggleRolling, showRolling, preSong, togglePlay, nextSong, ppIcon, curProgressBarWidth,
      setCurTime, currentTime, lyric,
    } = this.props
    const coverImg = song.al.picUrl
    return (
      <div className={showRolling ? 'rolling rolling-up' : 'rolling'}>
        <i className="icon-cross goback" onClick={toggleRolling} />
        <img src={coverImg} alt="bg" className="bg" />
        <div className="left-part">
          <div className={ppIcon === 'icon-play3' ? 'album-img' : 'album-img active'}>
            <img src={coverImg} alt="album-img" />
          </div>
          <div className="player-btns">
            <button className="pre-btn" onClick={preSong}><i className="icon-previous2" /></button>
            <button className="pp-btn" onClick={togglePlay}><i className={ppIcon} /></button>
            <button className="next-icon" onClick={nextSong}><i className="icon-next2" /></button>
          </div>
          <div className="progress-wrapper">
            <div
              className="progress-bar"
              ref={(node) => {
              this.progressBar = node
            }}
              onClick={(e) => { setCurTime(e, this.progressBar) }}
            >
              <div className="current-progress" style={{ width: `${curProgressBarWidth}` }} />
            </div>
          </div>
        </div>

        <div className="right-part">
          <div className="song-info">
            <div className="song-name">
              {song.name}
            </div>
            <div className="info-block">
              <span>专辑：<Link key={song.al.id} to={{ pathname: `/albuminfo/${song.al.id}` }}> {song.al.name} </Link></span>
              <span>歌手：{song
                .ar
                .map(v => <Link key={v.id} to={{ pathname: `/artistinfo/${v.id}` }}> {v.name} </Link>)}
              </span>
            </div>
          </div>
          <LyricBlock lyric={lyric} currentTime={currentTime} />
        </div>
      </div>
    )
  }
}
