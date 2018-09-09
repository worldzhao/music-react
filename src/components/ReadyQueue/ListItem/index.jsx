import React, { Component } from 'react'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'
// 这里使用了PureComponent 目的是为了避免不必要的re-render
// 使用场景参考：https://zhuanlan.zhihu.com/p/32601923
export default class Item extends Component {
  setItemClass = (songInListId, SongId) =>
    (songInListId === SongId ? 'list-item active' : 'list-item')

  playSong = () => {
    const { songInList, index } = this.props
    const flag = 'PLAY_SONG'
    this.props.changeSong({ song: songInList, index, flag })
  }

  deleteSong = () => {
    const { songInList } = this.props
    this.props.deleteSong(songInList.id)
  }

  renderArtists = artists =>
    artists.map(artist => (
      <Link
        key={artist.id}
        to={{
          pathname: `/artistinfo/${artist.id}`,
        }}
      >
        {artist.name}
      </Link>
    ))

  render() {
    const { songInList, song } = this.props
    const { id, name } = songInList
    const artists = songInList.ar || songInList.artists
    return (
      <li key={id} className={this.setItemClass(id, song.id)}>
        <div className="name" onClick={this.playSong}>
          {name}
        </div>
        <div className="artist">{this.renderArtists(artists)}</div>
        <Icon type="close" onClick={this.deleteSong} />
      </li>
    )
  }
}
