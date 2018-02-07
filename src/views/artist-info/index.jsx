import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArHeader from './ar-header/index'
import HotSongs from '../../component/info-list/index'
import Subtitle from '../../component/subtitle/index'
import Loading from '../../component/loading/index'
import { fetchArtistInfo } from '../../redux/artistinfo.redux'

import './style.styl'

const renderArtistInfo = (artistDetail) => {
  if (!artistDetail) return null
  const { artist, hotSongs } = artistDetail
  return [
    <Subtitle title="歌手信息" key="artist-title" />,
    <ArHeader artist={artist} key="artist-info" />,
    <HotSongs tracks={hotSongs} isShowAr={false} key="artist-hot-songs" />,
  ]
}

@connect(
  state => ({
    artistinfo: state.artistinfo,
  }),
  {
    fetchArtistInfo,
  },
)
export default class ArtistInfo extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchArtistInfo(id)
  }
  componentWillReceiveProps(nextProps) {
    // 处理组件相同路由切换页面不刷新的问题
    const { id } = nextProps.match.params
    const preId = this.props.match.params.id
    if (id !== preId) {
      nextProps.fetchArtistInfo(id)
    }
  }
  render() {
    console.log('====================================')
    console.log('render artist-info')
    console.log('====================================')
    const { isFetching, artistDetail } = this.props.artistinfo
    return (
      <div className="artist-info">
        {isFetching ? <Loading /> : renderArtistInfo(artistDetail)}
      </div>
    )
  }
}
