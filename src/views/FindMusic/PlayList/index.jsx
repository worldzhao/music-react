import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.styl'

const SongCard = (props) => {
  const {
    creator, id, coverImgUrl, name,
  } = props.playlist
  return (
    <div className="songcard">
      <div className="album-img">
        <Link to={{ pathname: `/playlistinfo/${id}` }}>
          <img src={coverImgUrl} alt="playlist-cover" />
        </Link>
      </div>
      <p className="title">{name}</p>
      <p className="creator">by {creator.nickname}</p>
    </div>
  )
}

export default class PlayList extends Component {
  componentDidMount() {
    // do sth
  }

  render() {
    const { data } = this.props
    return (
      <div className="songcard-page">
        {data.map(card => <SongCard key={card.id} playlist={card} />)}
      </div>
    )
  }
}
