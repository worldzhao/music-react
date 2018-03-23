import React, { Component, PureComponent } from 'react'
import cx from 'classnames'
import './Dots.styl'

const dotsSizeMap = {
  normal: 'haiqiu-swiper-dot-normal',
  small: 'haiqiu-swiper-dot-small',
  large: 'haiqiu-swiper-dot-large',
}
export default class Dots extends (Component || PureComponent) {
  state = {
    dotArr: [],
  };

  // no-did-mount-set-state
  componentWillMount() {
    const { dotsNum } = this.props
    const dotArr = new Array(dotsNum + 1)
      .join()
      .split('')
      .map((v, i) => ({
        index: i + 1,
        status: false,
      }))
    dotArr[0].status = true
    this.setState({
      dotArr,
    })
  }

  // dots跟随变化
  componentWillReceiveProps(nextProps) {
    const { dotArr } = this.state
    const { index, dotsNum } = nextProps
    dotArr.forEach((dot) => {
      const d = dot
      d.status = false
      if (d.index === index) {
        d.status = true
      }
    })

    if (index === 0) {
      dotArr[dotArr.length - 1].status = true
    }

    if (index === dotsNum + 1) {
      dotArr[0].status = true
    }

    const dotArrCopy = dotArr.slice()
    this.setState({
      dotArr: dotArrCopy,
    })
  }

  // 点击dots滚动
  slide = (nextIndex) => {
    const { handleDotsClick } = this.props
    handleDotsClick(nextIndex)
  };

  render() {
    const { dotArr } = this.state
    const { dotsSize, dotsColor } = this.props
    const dotsCls = cx(`${dotsSizeMap[dotsSize]}`, 'haiqiu-swiper-dot')
    return (
      <div className="haiqiu-swiper-dots-box">
        {dotArr.map(v => (
          <div
            className={dotsCls}
            style={{ background: v.status ? `${dotsColor}` : '#e5e5e5' }}
            key={v.index}
            onClick={() => {
              this.slide(v.index)
            }}
          />
        ))}
      </div>
    )
  }
}
