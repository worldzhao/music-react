import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCardList, keepScroll} from '../../redux/songcardlist.redux'
import SongCard from '../SongCard/SongCard';
import Loading from '../Loading/Loading';
import './SongCardPage.styl';

class SongCardPage extends Component {

  componentDidMount() {
    const {cardList, pageNum, limit, bRequest, scrollPoint} = this.props.songcardlist;
    if (!cardList.length) {
      this.props.getCardList(pageNum, limit, bRequest);
    }
    this.contentNode.scrollTop = scrollPoint;
  }

  handleScroll = () => {
    // 可以用函数节流优化
    const {pageNum, limit, bRequest} = this.props.songcardlist;
    const {scrollTop, clientHeight, scrollHeight} = this.contentNode;
    // 判断是否到达底部进行请求 同时要注意请求尚未回来时无法再次发出请求
    if (scrollTop + clientHeight === scrollHeight && bRequest) {
      this.props.getCardList(pageNum, limit, bRequest);
    }
    // 记录滚动点
    this.props.keepScroll(scrollTop);
  };

  render() {
    const {cardList} = this.props.songcardlist;
    return (
      <div className="songcard-page" ref={node => this.contentNode = node} onScroll={this.handleScroll}>
        {
          cardList.length ? renderCard(cardList) : <Loading/>
        }
      </div>
    )
  }
}

function renderCard(playlists) {
  const cards = playlists.map(v => <SongCard key={v.id} playlist={v}/>);
  return cards;
}

const mapStateToProps = (state) => ({
  songcardlist: state.songcardlist
});

const mapDispatchToProps = {
  getCardList,
  keepScroll
};
export default connect(mapStateToProps, mapDispatchToProps)(SongCardPage);
