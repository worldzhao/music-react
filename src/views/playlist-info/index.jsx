import React, { Component } from 'react'
import { connect } from 'react-redux'
import InfoHeader from './info-header/index'
import InfoList from './info-list/index'
import Loading from '../../component/loading/index'
import { getPlaylist } from '../../redux/playlistinfo.redux'

function renderPlaylist(playlist) {
  const { tracks } = playlist
  return (
    <div className="playlist-info">
      <InfoHeader playlist={playlist} />
      <InfoList tracks={tracks} />
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
