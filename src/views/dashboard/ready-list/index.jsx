import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './list-item/index'
import { changeSong, deleteSong } from '../../../redux/playqueue.redux'

import './style.styl'

@connect(state => ({ playqueue: state.playqueue }), { changeSong, deleteSong })
export default class ReadyList extends Component {
  render() {
    const { playlist, song } = this.props.playqueue
    return (
      <div className="readylist">
        <div className="list-head">
          <div>播放列表</div>
          <div>收藏全部</div>
          <div>清空</div>
        </div>
        <ul className="list-body">
          {playlist.map((v, index) => (
            <Item key={v.id} v={v} song={song} index={index} {...this.props} />
          ))}
        </ul>
      </div>
    )
  }
}
