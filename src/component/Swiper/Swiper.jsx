import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import Dots from './Dots/Dots'
import './Swiper.styl'

export default class Swiper extends (Component || PureComponent) {
  static propTypes = {
    autoplay: PropTypes.bool,
    autoplayInterval: PropTypes.number,
    dots: PropTypes.bool,
    dotsColor: PropTypes.string,
    dotsSize: PropTypes.oneOf(['normal', 'small', 'large']),
    arrows: PropTypes.bool,
    arrowsType: PropTypes.oneOf(['dark', 'light']),
    onChange: PropTypes.func,
  };

  static defaultProps = {
    autoplay: true,
    autoplayInterval: 3000,
    arrows: false,
    dots: true,
    dotsColor: '#31A896',
    dotsSize: 'normal',
  };

  state = {
    index: 1,
    left: -730,
    distance: 730,
  };

  componentDidMount() {
    this.removeAutoPlaySideEffect()
    this.autoPlay()
  }

  componentWillUnmount() {
    // 做项目的过程中，来回切换页面时，一直遇到Can only update a mounted or mounting component 这个问题
    // 原因是当离开页面以后，组件已经被卸载，存在定时器，执行setState时无法找到渲染组件。
    window.onblur()
    this.setState = () => {}
  }

  autoPlay = () => {
    const { autoplay, autoplayInterval } = this.props
    if (autoplay) {
      this.autoTimer = setInterval(() => {
        this.next()
      }, autoplayInterval)
    }
  };

  removeAutoPlaySideEffect = () => {
    // 如果把页面切换到别的页面，导致轮播图所在页面失焦，过一段时间再切回来会发现轮播狂转。
    // 原因是页面失焦以后，setInterval停止运行，但是如果切回来就会一次性把该走的一次性走完。
    // 解决的方法:当页面失焦时停止轮播，页面聚焦时开始轮播。
    window.onblur = () => {
      clearInterval(this.autoTimer)
      cancelAnimationFrame(this.timer)
    }

    window.onfocus = () => {
      // 清除 componentDidMount 中autoPlay的定时器
      clearInterval(this.autoTimer)
      this.autoPlay()
    }
  }

  pre = () => {
    const { index, distance } = this.state
    const { children } = this.props
    if (index === 0) {
      // 1. 瞬间切换到结尾对应图片
      // 2. 然后继续向前滚动
      this.setState({
        left: -(children.length * distance),
        index: children.length,
      }, () => {
        this.pre()
      })
      return false
    }
    this.animateBox(index - 1)
    return true
  };

  next = () => {
    const { index, distance } = this.state
    const { children } = this.props
    if (index === children.length + 1) {
      // 1. 瞬间切换到开头对应图片
      // 2. 然后继续向后滚动
      this.setState(
        {
          left: -1 * distance,
          index: 1,
        },
        () => {
          this.next()
        },
      )
      return false
    }
    this.animateBox(index + 1)
    return true
  };

  dotsHandler = (nextIndex) => {
    const { index, distance } = this.state
    const { children } = this.props

    // 1. 瞬间切换到结尾对应图片
    // 2. 然后继续滚动
    if (index === 0) {
      this.setState(
        {
          left: -(children.length * distance),
          index: children.length,
        },
        () => {
          this.animateBox(nextIndex)
        },
      )
      return false
    }

    // 1. 瞬间切换到头部对应图片
    // 2. 然后继续滚动
    if (index === children.length + 1) {
      this.setState(
        {
          left: -1 * distance,
          index: 1,
        },
        () => {
          this.animateBox(nextIndex)
        },
      )
      return false
    }

    this.animateBox(nextIndex)
    return true
  }

  animateBox = (index) => {
    this.setState(
      {
        index,
      },
      () => {
        this.move()
      },
    )
  }

  move = () => {
    const { index, distance } = this.state
    cancelAnimationFrame(this.timer) // 要用定时器，先清定时器
    const render = () => {
      const { onChange } = this.props
      const { left } = this.state
      const finalLeft = -index * distance
      // 达到目的地
      if (left === finalLeft) {
        cancelAnimationFrame(this.timer) // 用完定时器，清除定时器
        if (Object.prototype.toString.call(onChange) === '[object Function]') {
          onChange()
        }
        return true
      }
      let distx = (finalLeft - left) / 10
      distx = distx > 0 ? Math.ceil(distx) : Math.floor(distx)
      this.setState({
        left: left + distx,
      })
      this.timer = requestAnimationFrame(render)
      return false
    }
    this.timer = requestAnimationFrame(render)
  };

  render() {
    const { left, distance, index } = this.state
    const {
      children, arrows, dots, dotsSize, dotsColor,
    } = this.props
    const imgNum = children.length
    const boxWidth = (imgNum + 2) * distance
    const dotsSetting = {
      index,
      dotsSize,
      dotsColor,
      dotsNum: imgNum,
      dotsHandler: this.dotsHandler,
    }
    return (
      <div
        className="haiqiu-swiper"
        style={{ width: `${distance}px` }}
        onMouseOver={() => { clearInterval(this.autoTimer) }}
        onMouseOut={() => { this.autoPlay() }}
      >
        {arrows && <span className="haiqiu-swiper-pre-arrow" onClick={this.pre}>&lt;</span>}
        <div
          className="haiqiu-swiper-box"
          style={{
            width: `${boxWidth}px`,
            left: `${left}px`,
          }}
        >
          {children[imgNum - 1]}
          {children}
          {children[0]}
        </div>
        {arrows && <span className="haiqiu-swiper-next-arrow" onClick={this.next}>&gt;</span>}
        {dots && <Dots {...dotsSetting} />}
      </div>
    )
  }
}
