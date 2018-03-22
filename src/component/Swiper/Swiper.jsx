import React, { Component } from 'react'
import './Swiper.styl'

export default class Swiper extends Component {
  state = {
    index: 1,
    left: -730,
    distance: 730,
  };
  componentDidMount() {
    console.log('====================================')
    console.log('轮播图组件')
    console.log('====================================')
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
        this.setState(
          {
            index: this.state.index - 1,
          },
          () => {
            this.move()
          },
        )
      })
    } else {
      this.setState(
        {
          index: index - 1,
        },
        () => {
          this.move()
        },
      )
    }
  };

  next = () => {
    const { index, distance } = this.state
    if (index === this.props.children.length + 1) {
      // 1. 瞬间切换到开头对应图片
      // 2. 然后继续向后滚动
      this.setState({
        left: -distance,
        index: 1,
      }, () => {
        this.setState(
          {
            index: this.state.index + 1,
          },
          () => {
            this.move()
          },
        )
      })
    } else {
      this.setState(
        {
          index: index + 1,
        },
        () => {
          this.move()
        },
      )
    }
  };

  move = () => {
    const { index, distance } = this.state
    // 配合css3 transition 存在局限性
    // this.setState({
    //   left: -index * distance,
    // })

    // 使用定时器
    // clearInterval(this.timer) // 要用定时器，先清定时器
    // this.timer = setInterval(() => {
    //   const { left } = this.state
    //   const finalLeft = -index * distance
    //   if (left === finalLeft) {
    //     clearInterval(this.timer) // 用完定时器，清除定时器
    //     return true
    //   }
    //   let distx = (finalLeft - left) / 10
    //   distx = distx > 0 ? Math.ceil(distx) : Math.floor(distx)
    //   this.setState({
    //     left: left + distx,
    //   })
    //   return false
    // }, 17)

    // 使用requestAnimationFrame
    cancelAnimationFrame(this.timer) // 要用定时器，先清定时器
    const render = () => {
      const { left } = this.state
      const finalLeft = -index * distance
      if (left === finalLeft) {
        cancelAnimationFrame(this.timer) // 用完定时器，清除定时器
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
    const { left, distance } = this.state
    const { children } = this.props
    const imgNum = children.length
    const boxWidth = (imgNum + 2) * distance
    return (
      <div className="zzw-swiper" style={{ width: `${distance}px` }}>
        <span className="zzw-swiper-pre-arrow" onClick={this.pre}>
          &lt;
        </span>
        <div
          className="zzw-swiper-box"
          style={{
            width: `${boxWidth}px`,
            left: `${left}px`,
          }}
        >
          {children[imgNum - 1]}
          {children}
          {children[0]}
        </div>
        <span className="zzw-swiper-next-arrow" onClick={this.next}>
          &gt;
        </span>
      </div>
    )
  }
}
