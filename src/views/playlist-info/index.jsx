import React, { Component } from 'react'
import { connect } from 'react-redux'
import InfoHeader from './info-header/index'
import InfoList from './info-list/index'
import Loading from '../../component/loading/index'
import { getPlaylist, clearList } from '../../redux/playlistinfo.redux'

import './style.styl'

function renderPlaylist(playlist) {
  const { tracks, coverImgUrl } = playlist
  return [
    <img src={coverImgUrl} alt="blur background" key="bgc" />,
    <div className="playlist-info" key="playlist">
      <InfoHeader playlist={playlist} />
      <InfoList tracks={tracks} />
    </div>,
  ]
}

// const mapStateToProps = state => ({
//   playlistinfo: state.playlistinfo,
// })

// const mapDispatchToProps = {
//   getPlaylist,
//   clearList,
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(PlaylistInfo)

@connect(
  state => ({
    playlistinfo: state.playlistinfo,
  }),
  {
    getPlaylist,
    clearList,
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
    this.props.getPlaylist(id)
  }

  componentWillUnmount() {
    this.props.clearList()
  }

  render() {
    const { isRequest, playlist } = this.props.playlistinfo
    return (
      <div className="playlist-wrapper">
        {isRequest
          ? <Loading />
          : renderPlaylist(playlist)}
      </div>
    )
  }
}

