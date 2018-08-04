import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCardList, getKeepScrollAction } from '../store/actionCreators'
import SongCard from './songcard'
import './style.styl'

const renderCard = (playlists) => {
  if (!playlists.length) return null

  const cards = playlists.map(v => <SongCard key={v.id} playlist={v} />)
  return cards
}

@connect(
  state => ({
    findMusic: state.findMusic,
  }),
  {
    fetchCardList,
    keepScroll: getKeepScrollAction,
  },
)
export default class SongCardPage extends Component {
  componentDidMount() {
    const {
      cardList, pageNum, limit, scrollPoint,
    } = this.props.findMusic
    if (!cardList.length) {
      this.props.fetchCardList(pageNum, limit)
    }
    this.contentNode.scrollTop = scrollPoint
  }

  componentWillUnmount() {
    const { scrollTop } = this.contentNode
    // 记录滚动点
    this.props.keepScroll(scrollTop)
  }

  handleScroll = () => {
    // 可以用函数节流优化
    // const {
    //   scrollTop, clientHeight, scrollHeight, isFetching,
    // } = this.contentNode
    // 判断是否到达底部进行请求 同时要注意请求尚未回来时无法再次发出请求
    // if (scrollTop + clientHeight === scrollHeight && !isFetching) {
    //   const { pageNum, limit } = this.props.findMusic
    //   this.props.fetchCardList(pageNum, limit)
    // }
  }

  render() {
    const { cardList } = this.props.findMusic
    return (
      <div
        className="songcard-page"
        ref={(node) => {
          this.contentNode = node
        }}
        onScroll={this.handleScroll}
      >
        {renderCard(cardList)}
      </div>
    )
  }
}
