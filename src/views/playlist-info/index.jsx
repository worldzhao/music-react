import React, { Component } from 'react'
import { connect } from 'react-redux'
import InfoHeader from './info-header/'
import InfoList from '../../component/info-list/'
import { fetchPlaylist } from './store/actionCreators'

import './style.styl'

const renderPlaylist = (playlist) => {
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
    playlistInfo: state.playlistInfo,
  }),
  {
    fetchPlaylist,
  },
)
export default class PlaylistInfo extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchPlaylist(id)
  }
  componentWillReceiveProps(nextProps) {
    // 处理组件相同路由切换页面不刷新的问题
    const { id } = nextProps.match.params
    const preId = this.props.match.params.id
    if (id !== preId) {
      nextProps.fetchPlaylist(id)
    }
  }
  render() {
    const { playlist } = this.props.playlistInfo
    return <div className="playlist-wrapper">{renderPlaylist(playlist)}</div>
  }
}
