import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Icon } from 'antd'
import { changeSong, updatePlayerStatus } from '@common/store/actionCreators'
import { formatDuration, formatCurrentTime } from '@src/utils'
import ReadyList from '@components/ReadyQueue'
import './style.styl'
@connect(
  state => ({ playQueue: state.playQueue }),
  {
    changeSong,
    updatePlayerStatus,
  },
)
export default class Player extends Component {
  constructor() {
    super()
    this.state = {
      cdt: '00:00',
      curProgressBarWidth: 0,
      curVolBarWidth: '50%',
      ppIcon: 'play-circle',
      lastVolumeIcon: '',
      volumeIcon: '🔊',
      mode: 'listloop',
      modeIcon: <span title="列表循环">🔁</span>,
      showReadyList: false,
    }
  }

  componentDidMount() {
    this.audio.volume = 0.5
  }

  componentDidUpdate(prevProps) {
    // 把这里当成redux的回调吧
    if (this.props.playQueue.song.id !== prevProps.playQueue.song.id) {
      this.changeSongCallback()
    }
  }

  setMode = () => {
    const { mode } = this.state
    const modeMap = {
      // 列表循环 => 顺序播放
      listloop() {
        this.setState({
          mode: 'sequential',
          modeIcon: <span title="顺序播放">↩️</span>,
        })
      },
      // 顺序播放 => 单曲循环
      sequential() {
        this.setState(
          {
            mode: 'singleCycle',
            modeIcon: <span title="单曲循环">🔂</span>,
          },
          () => {
            this.audio.loop = true
          },
        )
      },
      // 单曲循环 => 随机播放
      singleCycle() {
        this.setState(
          {
            mode: 'shuffleplay',
            modeIcon: <span title="随机播放">🔀</span>,
          },
          () => {
            this.audio.loop = false
          },
        )
      },
      // 随机播放 => 列表循环
      shuffleplay() {
        this.setState({
          mode: 'listloop',
          modeIcon: <span title="列表循环">🔁</span>,
        })
      },
    }
    modeMap[mode] && modeMap[mode]()
  }

  setVol = (e) => {
    const { left } = this.valBar.getBoundingClientRect()
    const distance = e.clientX - left
    const scale = distance / this.valBar.offsetWidth
    this.audio.volume = scale
    let volumeIcon
    if (scale > 0 && scale < 0.4) {
      volumeIcon = '🔉'
    } else if (scale >= 0.4 && scale < 0.6) {
      volumeIcon = '🔊'
    } else if (scale >= 0.6 && scale <= 1) {
      volumeIcon = '🔊'
    }
    this.setState({
      volumeIcon,
      curVolBarWidth: `${distance}px`,
    })
  }

  setCurTime = (e) => {
    const { left } = this.progressBar.getBoundingClientRect()
    const distance = e.clientX - left
    const scale = distance / this.progressBar.offsetWidth
    // audio标签内有duration，数据对象中也有dt，不过dt = 1000 * duration
    this.audio.currentTime = this.audio.duration * scale
    this.setState({
      curProgressBarWidth: `${scale * 100}%`,
    })
    this.updateCurrentTime()
  }

  syncTime = () => {
    const { song } = this.props.playQueue
    const duration = song.dt || song.duration
    const timeScale = (this.audio.currentTime * 1000) / duration
    this.setState({
      curProgressBarWidth: `${timeScale * 100}%`,
      cdt: formatCurrentTime(this.audio.currentTime),
    })
    this.updateCurrentTime()
  }

  toPlay = () => {
    // 资源无效异常处理存在问题
    this.audio.play()
    this.setState({ ppIcon: 'pause-circle' })
    this.updatePlayingStatus(true)
  }

  toPause = () => {
    this.audio.pause()
    this.setState({ ppIcon: 'play-circle' })
    this.updatePlayingStatus(false)
  }

  updatePlayingStatus = (status) => {
    this.props.updatePlayerStatus({
      isPlaying: status,
    })
  }

  updateCurrentTime = () => {
    this.props.updatePlayerStatus({
      currentTime: this.audio.currentTime,
    })
  }

  toggleMute = () => {
    this.audio.muted = !this.audio.muted
    if (this.audio.muted) {
      this.setState({
        lastVolumeIcon: this.state.volumeIcon,
        volumeIcon: '🔇',
      })
    } else {
      this.setState({
        volumeIcon: this.state.lastVolumeIcon,
      })
    }
  }

  preSong = () => {
    let { index } = this.props.playQueue
    const { mode } = this.state
    const { playlist } = this.props.playQueue
    index -= 1
    if (index === -1) {
      index = playlist.length - 1
    }
    if (mode === 'shuffleplay') {
      index = Math.floor(Math.random() * playlist.length)
    }
    const song = playlist[index]
    this.props.changeSong({ song, index })
  }

  nextSong = () => {
    const { mode } = this.state
    let { index } = this.props.playQueue
    const { playlist } = this.props.playQueue
    index += 1
    if (index === playlist.length) {
      index = 0
    }
    if (mode === 'shuffleplay') {
      index = Math.floor(Math.random() * playlist.length)
    }
    const song = playlist[index]
    this.props.changeSong({ song, index })
  }

  changeSongCallback = () => {
    const { ppIcon } = this.state
    // 暂停状态下切歌保持暂停状态
    // 播放状态下切歌歌曲立刻播放
    // ppIcon === pause-circle说明图标为暂停图标,处于播放状态
    // flag === 'PLAY_SONG' 是歌曲列表播放按钮被点击
    // 这里不需要担心flag对上下切换的影响 因为上下切换[changeSong]会默认重置flag
    if (ppIcon === 'pause-circle' || this.props.playQueue.flag === 'PLAY_SONG') {
      this.toPlay()
    }
  }

  ended = () => {
    // 当前歌曲播放完毕时会触发该方法
    const { mode } = this.state
    const { index, playlist } = this.props.playQueue
    const modeMap = {
      listloop() {
        this.nextSong()
      },
      sequential() {
        index !== playlist.length - 1 ? this.nextSong() : this.toPause()
      },
      shuffleplay() {
        this.nextSong()
      },
    }
    modeMap[mode] && modeMap[mode]()
  }

  toggleReadyList = () => {
    this.setState({
      showReadyList: !this.state.showReadyList,
    })
  }

  togglePlay = () => {
    if (this.audio.paused || this.audio.ended) {
      this.toPlay()
    } else {
      this.toPause()
    }
  }

  render() {
    const {
      ppIcon,
      volumeIcon,
      modeIcon,
      curProgressBarWidth,
      curVolBarWidth,
      showReadyList,
    } = this.state
    const { song } = this.props.playQueue
    const artists = song.artists || song.ar
    const album = song.album || song.al
    const duration = song.duration || song.dt

    return [
      <footer key="player" className="soul-player">
        <audio
          key="audio"
          src={song.url}
          ref={(node) => {
            this.audio = node
          }}
          onTimeUpdate={this.syncTime}
          onEnded={this.ended}
        >
          您的浏览器不支持audio标签，无法播放音乐
        </audio>
        <div className="player-album">
          <Link to={{ pathname: `/song/${song.id}` }}>
            <img src={album.picUrl} alt="album-img" />
          </Link>
        </div>
        <div className="player-btns">
          <Icon type="backward" onClick={this.preSong} />
          <Icon type={ppIcon} onClick={this.togglePlay} />
          <Icon type="forward" onClick={this.nextSong} />
        </div>

        <div className="player-state">
          <div className="player-state-top">
            <span className="name">{song.name}</span>
            <div className="artist">
              {artists.map(v => (
                <Link key={v.id} to={{ pathname: `/artist/${v.id}` }}>
                  {v.name}
                </Link>
              ))}
            </div>
            <div className="duration">
              {this.state.cdt}/{formatDuration(duration)}
            </div>
          </div>

          <div className="player-state-bottom">
            <div
              className="progress-bar"
              ref={(node) => {
                this.progressBar = node
              }}
              onClick={(e) => {
                this.setCurTime(e)
              }}
            >
              <div className="current-progress" style={{ width: `${curProgressBarWidth}` }} />
            </div>
          </div>
        </div>

        <div className="vol-wrapper">
          <div className="vol">
            <span onClick={this.toggleMute}>{volumeIcon}</span>
            <div
              className="vol-bar"
              onClick={this.setVol}
              ref={(node) => {
                this.valBar = node
              }}
            >
              <div className="current-vol" style={{ width: `${curVolBarWidth}` }} />
            </div>
          </div>
        </div>

        <div className="player-extra">
          <div className="mode-title" onClick={this.setMode}>
            {modeIcon}
          </div>
          <Icon type="heart-o" />
          <Icon type="bars" onClick={this.toggleReadyList} />
        </div>
        {showReadyList ? <ReadyList /> : null}
      </footer>,
    ]
  }
}
