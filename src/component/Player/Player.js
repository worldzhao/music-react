import React, {Component} from 'react';
import './Player.styl';

class Player extends Component {
  render() {
    return (
      <div className="player">
        {renderAlbumImg()}
        {renderPlayerBtns()}
        <div className="player-state">
          {renderSongInfo()}
          {renderProgressBar()}
        </div>

        <div className="vol-wrapper">
          <div className="vol">
            <i className="icon-volume-medium"/>
            <div className="vol-bar">
              <div className="current-vol"></div>
            </div>
          </div>
        </div>

        <div className="player-mode">
            <i className='icon-heart'/>
            <i className='icon-infinite'/>
            <i className='icon-list'/>
        </div>

      </div>
    )
  }
}

function renderAlbumImg() {
  return (
    <div className="album-img">
      <img src="https://p1.music.126.net/OC3XXrblVQPgXrkZyLaPow==/3394192437682072.jpg" alt="album-img"/>
    </div>
  )
}

function renderPlayerBtns() {
  return (
    <div className="player-btns">
      <button className="pre-btn"><i className="icon-previous2"/></button>
      <button className="pp-btn"><i className="icon-play3"/></button>
      <button className="next-icon"><i className="icon-next2"/></button>
    </div>
  )
}

function renderSongInfo() {
  return (
    <div className="song-info">
      <span className="song-name">
        Maps -
      </span>
      <div className="song-artist">
        <span>Maroon 5</span>
      </div>
      <div className="song-duration">
        3:51/4:20
      </div>
    </div>
  )
}

function renderProgressBar() {
  return (
    <div className="progress-wrapper">
      <div className="progress-bar">
        <div className="current-progress"></div>
      </div>
    </div>
  )
}


export default Player;
