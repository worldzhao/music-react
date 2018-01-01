import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeSong} from '../../redux/playqueue.redux';
import {formatDuration, formatCurrentTime} from '../../common/js/util'
import ReadyList from '../ReadyList/ReadyList';
import './Player.styl';

class Player extends Component {
  constructor() {
    super();
    this.state = {
      cdt:"00:00",
      curProgressBarWidth:0,
      curVolBarWidth:"50%",
      ppIcon: "icon-play3",
      lastVolumeIcon: "",
      volumeIcon:"icon-volume-medium",
      mode: "listloop",
      modeIcon: "icon-loop2",
      showReadyList:false
    }
  }

  componentDidMount() {
    this.audio.volume = 0.5;
  }

  componentWillReceiveProps(nextProps) {
    let {flag,playlist} = nextProps.playqueue;
    if(flag === "PLAY_SONG") {
      const song = playlist[0];
      const index = 0;
      flag = 'ready2play'
      // 下面change之后redux中要改变flag，避免死循环
      nextProps.changeSong({song,index,flag});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // 把这里当成异步dispatch的回调
    if (this.props.playqueue.song.id !== prevProps.playqueue.song.id){
      this.changeSongCallback();
    }
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
    const progressBarWidth = this.progressBar.offsetWidth;
    const {song} = this.props.playqueue;
    const timeScale = this.audio.currentTime * 1000 / song.dt;
    this.setState({
      curProgressBarWidth:progressBarWidth * timeScale + "px",
      cdt:formatCurrentTime(this.audio.currentTime)
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
    const {mode} = this.state;
    const {changeSong} = this.props;
    let {playlist,index} = this.props.playqueue;
    index = index - 1;
    if(index === -1){
      index = playlist.length - 1;
    }
    if(mode === 'shuffleplay') {
      index = Math.floor(Math.random()*playlist.length);
    } 
    const song = playlist[index];
    changeSong({song,index});
  }

  nextSong = () => {
    const {mode} = this.state;
    const {changeSong} = this.props;
    let {playlist, index} = this.props.playqueue;
    index = index + 1;
    if(index === playlist.length){
      index = 0;
    }
    if(mode === 'shuffleplay') {
      index = Math.floor(Math.random()*playlist.length);
    } 
    const song = playlist[index];
    changeSong({song,index});

    /*
    this.setState({
      index,
      song
    },()=>{
      this.changeSongCallback()
    })
    */
  }

  changeSongCallback = () => {
    const {ppIcon} = this.state;
      // 暂停状态下切歌保持暂停状态
      // 播放状态下切歌歌曲立刻播放
      // ppIcon === icon-pause2说明处于播放状态，图标为暂停图标
      if(ppIcon === "icon-pause2" || this.props.playqueue.flag === 'ready2play') {
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
          modeIcon: "icon-spinner11"
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
    const {mode} = this.state;
    const {index,playlist} = this.props.playqueue;
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

  toggleReadyList = () =>{
    this.setState({
      showReadyList:!this.state.showReadyList
    })
  }

  render() {
    const {
      ppIcon,
      volumeIcon,
      modeIcon,
      curProgressBarWidth,
      curVolBarWidth,
      showReadyList
    } = this.state;
    const {song} = this.props.playqueue;
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
              {this.state.cdt}/{formatDuration(song.dt)}
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
          <i className='icon-list' onClick={this.toggleReadyList}/>
        </div>

        {showReadyList?<ReadyList/>:null}
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

const mapStateToProps = (state) => {
  return {
    playqueue: state.playqueue
  }
}

const mapDispatchToProps = {
  changeSong
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
