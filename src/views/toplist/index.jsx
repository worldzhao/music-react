/* eslint-disable */
import React, { Component } from 'react'
import Loading from '../../component/loading/index'
import Subtitle from '../../component/subtitle/index'
import { connect } from 'react-redux'
import { getToplist } from '../../redux/toplist.redux'
import './style.styl'

class Toplist extends Component {
  componentDidMount() {
    // 这部分数据是可以缓存在redux中的
  }
  render() {
    return (
      <div className="toplist">
        <Subtitle title="排行榜" />
      </div>
    )
  }
}

export default Toplist
