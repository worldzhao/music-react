import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLyric } from './store/actionCreators'
import Lyric from './lyric'
import './style.styl'

@connect(
  state => ({ playQueue: state.playQueue, lyric: state.lyric }),
  {
    fetchLyric,
  },
)
export default class SongDetailPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchLyric(id)
  }

  setAlbumClass = () => {
    const { isPlaying } = this.props.playQueue
    return isPlaying ? 'album-img active' : 'album-img'
  }

  render() {
    const { currentTime, song } = this.props.playQueue
    const { lyric } = this.props.lyric
    const album = song.album || song.al
    const coverImg = album.picUrl
    return (
      <div className="detail-page">
        <div>
          <div style={{ backgroundImage: `url(${coverImg})` }} className="filter" />
          <div className="left">
            <img src={coverImg} alt="album-img" className={this.setAlbumClass()} />
          </div>
          <div className="right">
            <div className="name">{song.name}</div>
            <Lyric lyric={lyric} currentTime={currentTime} />
          </div>
        </div>
      </div>
    )
  }
}
