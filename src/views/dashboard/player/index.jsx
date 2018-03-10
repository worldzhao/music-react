import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeSong } from '../../../redux/playqueue.redux'
import { formatDuration, formatCurrentTime } from '../../../common/js/util'
import ReadyList from '../ready-list/index'
import Rolling from '../../rolling/index'
import './style.styl'

@connect(
  state => ({ playqueue: state.playqueue }),
  {
    changeSong,
  },
)
export default class Player extends Component {
  constructor() {
    super()
    this.state = {
      cdt: '00:00',
      curProgressBarWidth: 0,
      curVolBarWidth: '50%',
      ppIcon: 'icon-play3',
      lastVolumeIcon: '',
      volumeIcon: 'icon-volume-medium',
      mode: 'listloop',
      modeIcon: 'icon-loop2',
      showReadyList: false,
      showRolling: false,
    }
  }

  componentDidMount() {
    this.audio.volume = 0.5
  }

  componentDidUpdate(prevProps) {
    // 把这里当成redux的回调吧
    if (this.props.playqueue.song.id !== prevProps.playqueue.song.id) {
      this.changeSongCallback()
    }
  }

  setMode = () => {
    const { mode } = this.state
    switch (mode) {
      // 列表循环 => 顺序播放
      case 'listloop':
        this.setState({
          mode: 'sequential',
          modeIcon: 'icon-spinner11',
        })
        break
      // 顺序播放 => 单曲循环
      case 'sequential':
        this.setState({
          mode: 'singleCycle',
          modeIcon: 'icon-loop',
        }, () => {
          this.audio.loop = true
        })
        break
      // 单曲循环 => 随机播放
      case 'singleCycle':
        this.setState({
          mode: 'shuffleplay',
          modeIcon: 'icon-shuffle',
        }, () => {
          this.audio.loop = false
        })
        break
      // 随机播放 => 列表循环
      case 'shuffleplay':
        this.setState({
          mode: 'listloop',
          modeIcon: 'icon-loop2',
        })
        break
      default:
        break
    }
  };

  setVol = (e) => {
    const distance = e.clientX - this.volBar.offsetLeft
    const scale = distance / this.volBar.offsetWidth
    this.audio.volume = scale
    let volumeIcon
    if (scale > 0 && scale < 0.4) {
      volumeIcon = 'icon-volume-low'
    } else if (scale >= 0.4 && scale < 0.6) {
      volumeIcon = 'icon-volume-medium'
    } else if (scale >= 0.6 && scale <= 1) {
      volumeIcon = 'icon-volume-high'
    }
    this.setState({
      volumeIcon,
      curVolBarWidth: `${distance}px`,
    })
  };

  setCurTime = (e, bar) => {
    // 不要用e.target.offsetWidth 莫名其妙 冒泡？
    const distance = e.clientX - bar.offsetLeft
    const scale = distance / bar.offsetWidth
    // audio标签内有duration，数据对象中也有dt，不过dt = 1000 * duration
    this.audio.currentTime = this.audio.duration * scale
    this.setState({
      curProgressBarWidth: `${scale * 100}%`,
    })
  };

  syncTime = () => {
    const { song } = this.props.playqueue
    const timeScale = (this.audio.currentTime * 1000) / song.dt
    this.setState({
      curProgressBarWidth: `${timeScale * 100}%`,
      cdt: formatCurrentTime(this.audio.currentTime),
    })
  };

  toPlay = () => {
    // 资源无效异常处理存在问题
    this
      .audio
      .play()
    this.setState({ ppIcon: 'icon-pause2' })
  };

  toPause = () => {
    this
      .audio
      .pause()
    this.setState({ ppIcon: 'icon-play3' })
  };

  toggleMute = () => {
    this.audio.muted = !this.audio.muted
    if (this.audio.muted) {
      this.setState({
        lastVolumeIcon: this.state.volumeIcon,
        volumeIcon: 'icon-volume-mute2',
      })
    } else {
      this.setState({
        volumeIcon: this.state.lastVolumeIcon,
      })
    }
  };


  preSong = () => {
    const { mode } = this.state
    let { index } = this.props.playqueue
    const { playlist } = this.props.playqueue
    index -= 1
    if (index === -1) {
      index = playlist.length - 1
    }
    if (mode === 'shuffleplay') {
      index = Math.floor(Math.random() * playlist.length)
    }
    const song = playlist[index]
    this.props.changeSong({ song, index })
  };

  nextSong = () => {
    const { mode } = this.state
    let { index } = this.props.playqueue
    const { playlist } = this.props.playqueue

    index += 1
    if (index === playlist.length) {
      index = 0
    }
    if (mode === 'shuffleplay') {
      index = Math.floor(Math.random() * playlist.length)
    }
    const song = playlist[index]
    this.props.changeSong({ song, index })
  };

  changeSongCallback = () => {
    const { ppIcon } = this.state
    // 暂停状态下切歌保持暂停状态
    // 播放状态下切歌歌曲立刻播放
    // ppIcon === icon-pause2说明图标为暂停图标,处于播放状态
    // flag === 'PLAY_SONG' 是歌曲列表播放按钮被点击
    // 这里不需要担心flag对上下切换的影响 因为上下切换[changeSong]会默认重置flag
    if (ppIcon === 'icon-pause2' || this.props.playqueue.flag === 'PLAY_SONG') {
      this.toPlay()
    }
  };

  ended = () => {
    // 当前歌曲播放完毕时会触发该方法
    const { mode } = this.state
    const { index, playlist } = this.props.playqueue
    switch (mode) {
      case 'listloop':
        this.nextSong()
        break
      case 'sequential':
        if (index !== playlist.length - 1) {
          this.nextSong()
        } else {
          this.toPause()
        }
        break
      case 'shuffleplay':
        this.nextSong()
        break
      default:
        break
    }
  };

  toggleReadyList = () => {
    this.setState({
      showReadyList: !this.state.showReadyList,
    })
  };

  toggleRolling = () => {
    this.setState({
      showRolling: !this.state.showRolling,
    })
  };

  togglePlay = () => {
    if (this.audio.paused || this.audio.ended) {
      this.toPlay()
    } else {
      this.toPause()
    }
  };
  render() {
    const {
      ppIcon,
      volumeIcon,
      modeIcon,
      curProgressBarWidth,
      curVolBarWidth,
      showReadyList,
    } = this.state
    const { song } = this.props.playqueue
    const extraProps = {
      toggleRolling: this.toggleRolling,
      preSong: this.preSong,
      togglePlay: this.togglePlay,
      nextSong: this.nextSong,
      setCurTime: this.setCurTime,
    }
    if (this.audio) {
      extraProps.currentTime = this.audio.currentTime
    }
    const allProps = {
      ...this.state,
      ...this.props,
      ...extraProps,
    }
    return [
      <div className="player" key="player">
        <div className="album-img" onClick={this.toggleRolling}>
          <img src={song.al.picUrl} alt="album-img" />
        </div>
        <div className="player-btns">
          <button className="pre-btn" onClick={this.preSong}><i className="icon-previous2" /></button>
          <button className="pp-btn" onClick={this.togglePlay}><i className={ppIcon} /></button>
          <button className="next-icon" onClick={this.nextSong}><i className="icon-next2" /></button>
        </div>

        <div className="player-state">
          <div className="song-info">
            <audio
              src={song.url}
              ref={(node) => {
              this.audio = node
            }}
              onTimeUpdate={this.syncTime}
              onEnded={this.ended}
            >
              您的浏览器不支持audio标签，无法播放音乐
            </audio>
            <span className="song-name">
              {song.name}
            </span>
            <div className="song-artist">
              {song
                .ar
                .map(v => <Link key={v.id} to={{ pathname: `/artistinfo/${v.id}` }}> {v.name} </Link>)}
            </div>
            <div className="song-duration">
              {this.state.cdt}/{formatDuration(song.dt)}
            </div>
          </div>

          <div className="progress-wrapper">
            <div
              className="progress-bar"
              ref={(node) => {
              this.progressBar = node
            }}
              onClick={(e) => { this.setCurTime(e, this.progressBar) }}
            >
              <div className="current-progress" style={{ width: `${curProgressBarWidth}` }} />
            </div>
          </div>
        </div>

        <div className="vol-wrapper">
          <div className="vol">
            <i className={volumeIcon} onClick={this.toggleMute} />
            <div
              className="vol-bar"
              ref={(node) => {
              this.volBar = node
            }}
              onClick={this.setVol}
            >
              <div className="current-vol" style={{ width: `${curVolBarWidth}` }} />
            </div>
          </div>
        </div>

        <div className="player-mode">
          <i className="icon-heart" />
          <i className={modeIcon} onClick={this.setMode} />
          <i className="icon-list" onClick={this.toggleReadyList} />
        </div>
        {showReadyList ? <ReadyList /> : null}
      </div>,
      <Rolling key="rolling" {...allProps} />,
    ]
  }
}
