import React, { Component } from 'react'
import { connect } from 'react-redux'
import InfoHeader from '../../component/InfoHeader/InfoHeader'
import SongList from '../../component/SongList/SongList'
import Loading from '../../component/Loading/Loading'
import { getPlaylist } from '../../redux/playlistinfo.redux'
import './PlaylistInfo.styl'

function renderPlaylist(playlist) {
  const { tracks } = playlist
  return (
    <div className="playlist-info">
      <InfoHeader playlist={playlist} />
      <SongList tracks={tracks} />
    </div>
  )
}

class PlaylistInfo extends Component {
  componentDidMount() {
    const id = this
      .props
      .history
      .location
      .search
      .split('=')[1]
    this.props.getPlaylist(id)
  }

  render() {
    const { playlist } = this.props.playlistinfo
    return (
      <div>
        {playlist
          ? renderPlaylist(playlist)
          : <Loading />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  playlistinfo: state.playlistinfo,
})

const mapDispatchToProps = {
  getPlaylist,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistInfo)
