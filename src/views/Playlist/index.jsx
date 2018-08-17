import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import InfoHeader from './header'
import InfoList from '../../component/List'
import { star, cancelStar } from '../../common/store/actionCreators'
import { fetchPlaylist } from './store/actionCreators'
import './style.styl'

@connect(
  state => ({
    playlistInfo: state.playlistInfo,
    starredList: state.playQueue.starredList,
  }),
  {
    fetchPlaylist,
    star,
    cancelStar,
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

  beforeStar = () => {
    const { playlist } = this.props.playlistInfo
    const { id, name, coverImgUrl } = playlist
    const parseList = {
      id,
      name,
      coverImgUrl,
    }
    this.props.star(parseList)
  }

  beforeCancelStar = () => {
    const { playlist } = this.props.playlistInfo
    const { id } = playlist
    this.props.cancelStar(id)
  }

  render() {
    const { playlist } = this.props.playlistInfo
    const { tracks, coverImgUrl } = playlist || {}

    console.log(playlist)

    return (
      <div className="playlist-wrapper">
        {playlist && (
          <Fragment>
            <img src={coverImgUrl} alt="blur background" key="bgc" />,
            <div className="playlist-info" key="playlist">
              <InfoHeader
                playlist={playlist}
                beforeStar={this.beforeStar}
                beforeCancelStar={this.beforeCancelStar}
              />
              <InfoList tracks={tracks} />
            </div>
          </Fragment>
        )}
      </div>
    )
  }
}
