import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
// 这里使用了PureComponent 目的是为了避免不必要的re-render
// 使用场景参考：https://zhuanlan.zhihu.com/p/32601923
export default class Item extends PureComponent {
  playSong = (song, index) => {
    const flag = 'PLAY_SONG'
    this.props.changeSong({ song, index, flag })
  }

  render() {
    const { v, song, index } = this.props
    return (
      <li
        key={v.id}
        className={v.id === song.id ? 'body-item active' : 'body-item'}
      >
        <div
          className="song-name"
          onClick={() => {
            this.playSong(v, index)
          }}
        >
          {v.name}
        </div>
        <div className="song-artist">
          {v.ar.map(artist => (
            <Link
              key={artist.id}
              to={{
                pathname: `/artistinfo/${artist.id}`,
              }}
            >
              {`${artist.name} `}
            </Link>
          ))}
        </div>
        <div className="delete-btn">
          <i
            className="icon-cross"
            onClick={() => {
              this.props.deleteSong(v.id)
            }}
          />
        </div>
      </li>
    )
  }
}
