import React,{Component} from 'react';
import './SongList.styl';
class SongList extends Component{
  render(){
    const {tracks} = this.props;
    return(
      <div className="songList">
        <p className='play-all-btn'>播放全部({tracks.length})</p>
      </div>
    )
  }
}

export default SongList;
