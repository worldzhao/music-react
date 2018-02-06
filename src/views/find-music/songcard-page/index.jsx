import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCardList, keepScroll } from '../../../redux/songcardlist.redux'
import SongCard from '../songcard/index'
import Loading from '../../../component/loading/index'
import './style.styl'

const renderCard = (playlists) => {
  const cards = playlists.map(v => <SongCard key={v.id} playlist={v} />)
  return cards
}

@connect(
  state => ({
    songcardlist: state.songcardlist,
  }),
  {
    fetchCardList,
    keepScroll,
  },
)
export default class SongCardPage extends Component {
  componentDidMount() {
    const {
      cardList, pageNum, limit, scrollPoint,
    } = this.props.songcardlist
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
    const {
      scrollTop,
      clientHeight,
      scrollHeight,
      isFetching,
    } = this.contentNode
    // 判断是否到达底部进行请求 同时要注意请求尚未回来时无法再次发出请求
    if (scrollTop + clientHeight === scrollHeight && !isFetching) {
      const { pageNum, limit } = this.props.songcardlist
      this.props.fetchCardList(pageNum, limit)
    }
  };

  render() {
    const { cardList } = this.props.songcardlist
    return (
      <div
        className="songcard-page"
        ref={(node) => {
          this.contentNode = node
        }}
        onScroll={this.handleScroll}
      >
        {cardList.length ? renderCard(cardList) : <Loading />}
      </div>
    )
  }
}
