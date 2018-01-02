import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {changeSong,deleteSong} from '../../redux/playqueue.redux';

import "./ReadyList.styl";

class ReadyList extends Component {

  playSong = (song,index) => {
    const flag = 'ready2play'
    const {changeSong} = this.props;
    changeSong({song,index,flag});
  }

  render() {
    const {playlist,song} = this.props.playqueue;
    return (
      <div className="readylist">
        <div className="list-head">
          <div>播放列表</div>
          <div>收藏全部</div>
          <div>清空</div>
        </div>
          <ul className="list-body">
            {playlist.map((v,index) => 
            <li 
            key={v.id} 
            className={v.id===song.id?"body-item active":"body-item"}>
              <div className="song-name" onClick={()=>{this.playSong(v,index)}}>{v.name}</div>
              <div className="song-artist">
                {v
                  .ar
                  .map(artist => <Link
                    key={artist.id}
                    to={{
                    pathname: `/artistinfo`,
                    search: `?id=${artist.id}`
                  }}>{artist.name} </Link>)
                }
              </div>
              <div className="delete-btn">
                <i className="icon-cross" onClick={()=>{this.props.deleteSong(v.id)}}></i>
              </div>
            </li>)
            }
          </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {playqueue: state.playqueue}
}

const mapDispatchToProps = {
  changeSong,
  deleteSong
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadyList);
