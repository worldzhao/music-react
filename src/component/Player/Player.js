import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeSong} from '../../redux/playqueue.redux';
import {formatDuration, formatCurrentTime} from '../../common/js/util'
import './Player.styl';

class Player extends Component {
  constructor() {
    super();
    this.state = {
      curProgressBarWidth:0,
      curVolBarWidth:"50%",
      ppIcon: "icon-play3",
      lastVolumeIcon: "",
      volumeIcon:"icon-volume-medium",
      mode: "listloop",
      modeIcon: "icon-loop2",
      index:0
    }
  }

  componentDidMount() {
    this.audio.volume = 0.5;
  }

  togglePlay = () => {
    if (this.audio.paused || this.audio.ended) {
      this.toPlay();
    } else {
      this.toPause()
    }
  }

  toPlay = () => {
    this
      .audio
      .play();
    this.setState({ppIcon: 'icon-pause2'})
  }

  toPause = () => {
    this
      .audio
      .pause();
    this.setState({ppIcon: 'icon-play3'})
  }

  syncTime = () => {
    const {currentTime} = this.audio;
    const progressBarWidth = this.progressBar.offsetWidth;
    const {curProgressBarWidth,song} = this.state;
    const {dt} = song;
    const timeScale = currentTime * 1000 / dt;
    this.setState({
      curProgressBarWidth:progressBarWidth * timeScale + "px",
      song: {
        ...this.state.song,
        cdt: formatCurrentTime(currentTime),
      }
    })
  }

  setCurTime=(e)=>{
    // 不要用e.target.offsetWidth 莫名其妙 冒泡？
    const distance = e.clientX - this.progressBar.offsetLeft;
    const scale = distance / this.progressBar.offsetWidth;
    // audio标签内有duration，对象中也有dt，不过dt = 1000 * duration
    this.audio.currentTime = this.audio.duration * scale;
    this.setState({
      curProgressBarWidth:distance + "px"
    })
  }

  toggleMute = () => {
    this.audio.muted = !this.audio.muted;
    if(this.audio.muted){
      this.setState({
        lastVolumeIcon:this.state.volumeIcon,
        volumeIcon:'icon-volume-mute2'
      })
    } else {
      this.setState({
        volumeIcon:this.state.lastVolumeIcon
      })
    }
  }

  setVol=(e)=>{
    const distance = e.clientX - this.volBar.offsetLeft;
    const scale = distance / this.volBar.offsetWidth;
    this.audio.volume=scale;
    let volumeIcon;
    if(scale > 0&&scale < 0.4){
      volumeIcon = 'icon-volume-low';
    } else if (scale >= 0.4 && scale < 0.6) {
      volumeIcon = 'icon-volume-medium';
    } else if (scale >= 0.6 && scale <= 1) {
      volumeIcon = 'icon-volume-high'
    }
    this.setState({
      volumeIcon:volumeIcon,
      curVolBarWidth:distance + "px"
    })
  }

  preSong = () => {
    const {mode,playlist} = this.state;
    let index = this.state.index - 1;
    if(index === -1){
      index = playlist.length - 1;
    }
    if(mode === 'shuffleplay') {
      index = Math.floor(Math.random()*playlist.length);
    } 
    const song = this.state.playlist[index];
    this.setState({
      index,
      song
    },this.changeSongCallback)

  }

  nextSong = () => {
    const {mode,playlist} = this.state;
    let index = this.state.index + 1;
    if(index === playlist.length){
      index = 0;
    }
    if(mode === 'shuffleplay') {
      index = Math.floor(Math.random()*playlist.length);
    } 
    const song = this.state.playlist[index];
    this.setState({
      index,
      song
    },this.changeSongCallback)
  }

  changeSongCallback = () => {
    const {ppIcon} = this.state;
      // 暂停状态下切歌保持暂停状态
      // 播放状态下切歌歌曲立刻播放
      // ppIcon === icon-pause2说明处于播放状态，图标为暂停图标
      if(ppIcon === "icon-pause2") {
        this.toPlay();
      }else{
        return;
      }
  }

  setMode = () => {
    const {mode} = this.state;
    switch (mode) {
      case "listloop":
        this.setState({
          mode: "sequential",
          modeIcon: "icon-loop2"
        })
        break;
      case "sequential":
        this.setState({
          mode: "singleCycle",
          modeIcon: "icon-loop"
        })
        break;
      case "singleCycle":
        this.setState({
          mode: "shuffleplay",
          modeIcon: "icon-shuffle"
        })
        break;
      case "shuffleplay":
        this.setState({
          mode: "listloop",
          modeIcon: "icon-loop2"
        })
        break;
      default:
        break;
    }
  }

  ended = () => {
    // 当前歌曲播放完毕时会触发该方法
    const {mode,index,playlist} = this.state;
    switch (mode) {
      case "listloop":
        this.nextSong();
        break;
      case "sequential":
        if(index !== playlist.length - 1){
          this.nextSong();
        } else {
          this.toPause();
        }
        break;
      case "singleCycle":
        this.audio.loop = true;
        break;
      case "shuffleplay":
        this.nextSong();
        break;    
      default:
        break;
    }
  }

  render() {
      const {
        song,
        ppIcon,
        volumeIcon,
        modeIcon,
        curProgressBarWidth,
        curVolBarWidth
      } = this.state;
    return (
      <div className="player">
        {renderAlbumImg(song)}

        <div className="player-btns">
          <button className="pre-btn" onClick={this.preSong}><i className="icon-previous2"/></button>
          <button className="pp-btn" onClick={this.togglePlay}><i className={ppIcon}/></button>
          <button className="next-icon" onClick={this.nextSong}><i className="icon-next2"/></button>
        </div>

        <div className="player-state">
          <div className="song-info">
            <audio src={song.url} ref={(node)=> {this.audio = node}} onTimeUpdate={this.syncTime} onEnded={this.ended}>
              您的浏览器不支持audio标签，无法播放音乐
            </audio>
            <span className="song-name">
              {song.name}
            </span>
            <div className="song-artist">
              {song
                .ar
                .map(v =>< Link key = {v.id} to = {{pathname:`/artistinfo`,search:`?id=${v.id}`}} > {v.name} </Link>)}
            </div>
            <div className="song-duration">
              {song.cdt}/{formatDuration(song.dt)}
            </div>
          </div>

          <div className="progress-wrapper">
            <div className="progress-bar" ref={(node) => {this.progressBar = node}} onClick={this.setCurTime}>
              <div className="current-progress" style={{"width":`${curProgressBarWidth}`}}></div>
            </div>
          </div>
        </div>

        <div className="vol-wrapper">
          <div className="vol">
            <i className={volumeIcon} onClick={this.toggleMute}/>
            <div className="vol-bar" ref={(node) => {this.volBar = node}} onClick={this.setVol}>
              <div className="current-vol" style={{"width":`${curVolBarWidth}`}}></div>
            </div>
          </div>
        </div>

        <div className="player-mode">
          <i className='icon-heart'/>
          <i className={modeIcon} onClick={this.setMode}/>
          <i className='icon-list'/>
        </div>

      </div>
    )
  }
}

function renderAlbumImg(song) {
  return (
    <div className="album-img">
      <img src={song.al.picUrl} alt="album-img"/>
    </div>
  )
}

export default Player;
