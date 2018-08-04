import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArHeader from './ar-header/'
import HotSongs from '../../component/info-list/'
import Subtitle from '../../component/subtitle/'
import { getArtistInfoEffect } from './store/actionCreators'
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
// @connect(
//   state => ({
//     artistInfo: state.artistInfo,
//   }),
//   dispatch => ({
//     getArtistInfoEffect: dispatch(actionCreators.getArtistInfoEffect()),
//   }),
// )
@connect(
  state => ({
    artistInfo: state.artistInfo,
  }),
  {
    getArtistInfoEffect,
  },
)
export default class ArtistInfo extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getArtistInfoEffect(id)
  }
  componentWillReceiveProps(nextProps) {
    // 处理组件相同路由切换页面不刷新的问题
    const { id } = nextProps.match.params
    const preId = this.props.match.params.id
    if (id !== preId) {
      nextProps.getArtistInfoEffect(id)
    }
  }
  render() {
    const { data } = this.props.artistInfo
    return <div className="artist-info">{renderArtistInfo(data)}</div>
  }
}
