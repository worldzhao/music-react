import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {specIndex, formatDuration} from '../../common/js/util'
import './SongList.styl';

class SongList extends Component {
  render() {
    const {tracks} = this.props;
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
                    <i className="icon-plus"/>
                    <i className="icon-play3"/>
                    <div className="song-artist">
                      {
                        song.ar.map(artist =>
                          <Link key={artist.id} to={{pathname: `/artistinfo`, search: `?id=${artist.id}`}}>{artist.name}</Link>)
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

export default SongList;
