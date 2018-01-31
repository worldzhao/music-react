import React, { Component } from 'react'
import { connect } from 'react-redux'
import InfoHeader from './info-header/index'
import InfoList from './info-list/index'
import Loading from '../../component/loading/index'
import { fetchPlaylist } from '../../redux/playlistinfo.redux'

import './style.styl'

function renderPlaylist(playlist) {
  if (!playlist) return null
  const { tracks, coverImgUrl } = playlist
  return [
    <img src={coverImgUrl} alt="blur background" key="bgc" />,
    <div className="playlist-info" key="playlist">
      <InfoHeader playlist={playlist} />
      <InfoList tracks={tracks} />
    </div>,
  ]
}

@connect(
  state => ({
    playlistinfo: state.playlistinfo,
  }),
  {
    fetchPlaylist,
  },
)
export default class PlaylistInfo extends Component {
  componentDidMount() {
    const id = this
      .props
      .history
      .location
      .search
      .split('=')[1]
    this.props.fetchPlaylist(id)
  }

  render() {
    const { isFetching, playlist } = this.props.playlistinfo
    return (
      <div className="playlist-wrapper">
        {isFetching
          ? <Loading />
          : renderPlaylist(playlist)}
      </div>
    )
  }
}

