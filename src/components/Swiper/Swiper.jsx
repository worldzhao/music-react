import React, { Component, PureComponent, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Dots from './Dots/Dots'
import './Swiper.styl'

const arrowsTypeMap = {
  dark: 'haiqiu-swiper-arrow-dark',
  light: 'haiqiu-swiper-arrow-light',
}
export default class Swiper extends (Component || PureComponent) {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
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
    width: 730,
    height: 336,
    autoplay: true,
    autoplayInterval: 3000,
    arrows: true,
    arrowsType: 'light',
    dots: true,
    dotsColor: '#31A896',
    dotsSize: 'normal',
  };

  state = {
    index: 1,
    left: -730,
    distance: 730,
    height: 336,
  };

  componentWillMount() {
    const { width, height } = this.props
    this.setState({
      left: -width,
      distance: width,
      height,
    })
  }
  componentDidMount() {
    this.removeAutoPlaySideEffect()
    this.autoPlay()
  }

  componentWillUnmount() {
    // 做项目的过程中，来回切换页面时，一直遇到Can only update a mounted or mounting component 这个问题
    // 原因是当离开页面以后，组件已经被卸载，存在定时器，执行setState时无法找到渲染组件。
    this.stopAutoPlay()
    this.setState = () => {}
  }

  autoPlay = () => {
    const { autoplay } = this.props
    autoplay && this.startAutoPlay()
  };

  startAutoPlay = () => {
    const { autoplayInterval } = this.props
    this.autoTimer = setInterval(() => {
      this.next()
    }, autoplayInterval)
  }

  stopAutoPlay = () => {
    clearInterval(this.autoTimer)
  }

  removeAutoPlaySideEffect = () => {
    // 如果把页面切换到别的页面，导致轮播图所在页面失焦，过一段时间再切回来会发现轮播狂转。
    // 原因是页面失焦以后，setInterval停止运行，但是如果切回来就会一次性把该走的一次性走完。
    // 解决的方法:当页面失焦时停止轮播，页面聚焦时开始轮播。
    window.onblur = () => {
      this.stopAutoPlay()
    }

    window.onfocus = () => {
      // 清除 componentDidMount 中autoPlay的定时器
      this.stopAutoPlay()
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

  handleDotsClick = (nextIndex) => {
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
          onChange(index, index - 1)
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

  // 对children判断并补完
  cloneChildren = (children) => {
    const length = Children.count(children)

    if (length <= 1) {
      return children
    }

    const clonedChildren = new Array(length + 2)
    Children.forEach(children, (child, index) => {
      clonedChildren[index + 1] = child
      if (index === 0) {
        clonedChildren[length + 1] = child
      } else if (index === length - 1) {
        clonedChildren[0] = child
      }
    })

    return clonedChildren
  };

  getBoxWidth = () => {
    const { distance } = this.state
    const { children } = this.props
    return (children.length + 2) * distance
  }

  getBoxItemWidth = () => this.getBoxWidth() / (this.clonedChildren.length)

  render() {
    const {
      left, distance, height, index,
    } = this.state
    const {
      children, arrows, dots, dotsSize, dotsColor, arrowsType,
    } = this.props
    const dotsSetting = {
      index,
      dotsSize,
      dotsColor,
      dotsNum: children.length,
      handleDotsClick: this.handleDotsClick,
    }

    this.clonedChildren = this.cloneChildren(children)

    const preArrCls = cx('haiqiu-swiper-arrow', 'haiqiu-swiper-arrow-pre', `${arrowsTypeMap[arrowsType]}`)
    const nextArrCls = cx('haiqiu-swiper-arrow', 'haiqiu-swiper-arrow-next', `${arrowsTypeMap[arrowsType]}`)
    return (
      <div
        className="haiqiu-swiper"
        style={{ width: `${distance}px`, height: `${height}px` }}
        onMouseOver={() => { clearInterval(this.autoTimer) }}
        onMouseOut={() => { this.autoPlay() }}
      >
        {arrows && <span className={preArrCls} onClick={this.pre}>&lt;</span>}
        <div
          className="haiqiu-swiper-box"
          style={{
            width: `${this.getBoxWidth()}px`,
            left: `${left}px`,
          }}
        >
          {Children.map(this.clonedChildren, (child, i) => cloneElement(child, {
              key: i - 1,
              style: { width: `${this.getBoxItemWidth()}px`, height: '100%' },
            }))}
        </div>
        {arrows && <span className={nextArrCls} onClick={this.next}>&gt;</span>}
        {dots && <Dots {...dotsSetting} />}
      </div>
    )
  }
}
