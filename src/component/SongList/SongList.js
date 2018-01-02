import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addSong2Que,playSong2Que} from '../../redux/playqueue.redux';
import {specIndex, formatDuration} from '../../common/js/util'
import './SongList.styl';

class SongList extends Component {
  render() {
    const {tracks,addSong2Que,playSong2Que} = this.props;
    return (
      <div className='songList'>
        <p className='play-all-btn'>播放全部({tracks.length})</p>
        <ul className='song-container'>
          {
            tracks.map((song, index) => {
              return (
                <li className='song-item' key={song.id}>
                  <div className="section-one">
                    <span className='song-index'>{specIndex(index)}</span>
                    <i className="icon-heart"/>
                    <span className="song-name">{song.name}</span>
                  </div>
                  <div className="section-two">
                    <i className="icon-plus" onClick={()=>addSong2Que(song)}/>
                    <i className="icon-play3" onClick={()=>playSong2Que(song)}/>
                    <div className="song-artist">
                      {
                        song.ar.map((artist,index) =>
                          <Link key={index + artist.id} to={{pathname: `/artistinfo`, search: `?id=${artist.id}`}}>{artist.name}</Link>)
                      }
                    </div>
                  </div>
                  <span className="song-album">{song.al.name}</span>
                  <span className="song-duration">{formatDuration(song.dt)}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  addSong2Que,
  playSong2Que
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
