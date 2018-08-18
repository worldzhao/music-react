import React, { Component } from 'react'
import LyricBlock from './lyric'
import './style.styl'

export default class SongDetailPage extends Component {
  componentDidMount() {
    // do sth
  }

  setAlbumClass = () => {
    const { isPlaying } = this.props
    return isPlaying ? 'album-img active' : 'album-img'
  }

  setPageClass = () => {
    const { showDetailPage } = this.props
    return showDetailPage ? 'detail-page detail-page-show' : 'detail-page'
  }

  render() {
    const { currentTime, lyric, song } = this.props
    const album = song.album || song.al
    const coverImg = album.picUrl
    return (
      <div className={this.setPageClass()}>
        <img src={coverImg} alt="bg" className="bg" />
        <div className="left">
          <img src={coverImg} alt="album-img" className={this.setAlbumClass()} />
        </div>
        <div className="right">
          <div className="name">{song.name}</div>
          <LyricBlock lyric={lyric} currentTime={currentTime} />
        </div>
      </div>
    )
  }
}
