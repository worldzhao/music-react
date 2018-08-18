import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.styl'
/**
 * 有三个要点：
 * 1. 歌词 String => 歌词 array
 * 原本的歌词字符串是lyric中的属性 通过parseLyric转变为歌词数组 保存在this.formatLyrics中[[time,lyric],[time,lyric]]
 * 注：【this.formatLyrics 不是state属性，改变它视图不会刷新】
 * 通过 this.formatLyrics渲染出所有歌词
 * 2. 激活当前播放的歌词
 * 最初的想法是初始化歌词时多加一个元素[[time,lyric,0]]
 * 找到currentTime播放到比time多一秒的那一句歌词，遍历所有歌词数组，第三个元素置统统为0，当前激活的置为1，通过这个flag来决定是否激活
 * 结果数组更新了，视图不更新，因为this.formatLyrics不是state也不是props
 * 解决办法：通过设置一个activeLines的state，和歌词对应上，一样的思路
 * 3. 滚动
 * 每次改变歌词时顺便改一下绝对定位的top值即可，想要动画效果就使用transition，加类名取消类名反复操作
 */
const parseLyric = (lyricStr) => {
  // 将文本分隔成一行一行，存入数组
  let lines = lyricStr.split('\n')
  // 用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
  const pattern = /\[\d{2}:\d{2}.\d{1,3}\]/g
  // 保存最终结果的数组
  const result = []
  // 去掉不含时间的行
  while (!pattern.test(lines[0])) {
    lines = lines.slice(1)
  }
  // 上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉
  if (!lines[lines.length - 1].length) { lines.pop() }
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i]
    const value = line.replace(pattern, '') // 提取歌词 将时间清空 返回一个新的字符串
    // 返回数组 [时间]，对该数组做处理，将时间转为秒数，同时注意此类情况:多个时间点共享同一句歌词，[时间1，时间2...]
    const times = line.match(pattern) || []
    times.forEach((time) => {
      // 去掉时间里的中括号得到xx:xx.xx并用:分割得到[xx,xx.xx]的数组
      const t = time.slice(1, -1).split(':')
      // 将结果压入最终数组
      result.push([(parseInt(t[0], 10) * 60) + parseFloat(t[1]), value]) // 组合成 [时间,歌词]
      // 此处可能多个时间对应同一句歌词，而result.push显然会打乱顺序的，例如第一个时间点和最后一个时间点共享同一句歌词，而此时Push进去他们是相邻的，应按照时间顺序进行排序
    })
  }
  // 加上下标 是为了取出时间 result[0][0]与result[1][0]做比较而不是result[0]与result[1]做比较
  result.sort((a, b) => a[0] - b[0])
  return result
}


export default class LyricBlock extends Component {
  constructor() {
    super()
    this.state = {
      activeLines: [],
      top: 40,

    }
  }
  componentWillReceiveProps(nextProps) {
    const { currentTime } = nextProps
    if (this.formatLyrics) {
      const len = this.formatLyrics.length
      for (let i = 0; i < len; i += 1) {
        if (currentTime > this.formatLyrics[i][0] - 1) {
          this.setState(
            {
              activeLines: new Array(len)
                .join()
                .split('')
                .map(() => 0),
            },
            () => {
              const copyLines = this.state.activeLines.slice()
              copyLines[i] = 1
              this.setState({
                activeLines: [...copyLines],
                top: 40 + (i * -28),

              })
            },
          )
        }
      }
    }
  }
  renderLyrics = (lyric) => {
    if (!lyric) return null
    if (lyric.nolyric || lyric.uncollected) {
      return <p className="lyric-info">该歌曲暂无歌词o(╯□╰)o</p>
    }
    const lyricStr = lyric.lrc.lyric
    this.formatLyrics = parseLyric(lyricStr)
    const { activeLines, top } = this.state
    return (
      <ul
        style={{ top: `${top}px` }}
        className="move-animate lyrics"
      >
        {this.formatLyrics.map((line, index) => (
          <li
            className={activeLines[index] === 1 ? 'line active' : 'line'}
            key={line[0]}
          >
            {line[1]}
          </li>
        ))}
      </ul>
    )
  };
  render() {
    const { lyric } = this.props
    return (
      <div className="lyric-block">
        {lyric ? (
          this.renderLyrics(lyric)
        ) : (
          <p className="lyric-info">获取歌词中...</p>
        )}
      </div>
    )
  }
}

LyricBlock.protoTypes = {
  lyric: PropTypes.object,
  currentTime: PropTypes.number,
}
