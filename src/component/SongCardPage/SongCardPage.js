import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCardList} from '../../redux/songcardlist.redux'
import SongCard from '../SongCard/SongCard';

// 该组件未完成任务 滑动到底部刷新，记录滚动条坐标
import './SongCardPage.styl';

class SongCardPage extends Component {

  componentDidMount(){
    const {cardlist,pagenum,limit} = this.props.songcardlist;
    if(!cardlist.length){
      this.props.getCardList(pagenum,limit);
    }
  }
  render() {
    const {cardlist,pagenum,limit} = this.props.songcardlist;
    return (
      <div className="songcard-page">
        {
          cardlist.length ? renderCard(cardlist) : 'waiting'
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
  getCardList
};
export default connect(mapStateToProps, mapDispatchToProps)(SongCardPage);
