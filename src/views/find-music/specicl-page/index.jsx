import React, { Component } from 'react'
import { connect } from 'react-redux'
import toolbox from 'react-tiny-swiper'
import { fetchSwiperImg } from '../store/actionCreators'

import './style.styl'

const { Swiper } = toolbox
const renderSwiper = (items) => {
  const setting = {
    width: 730,
    height: 336,
    autoplay: true,
    autoplayInterval: 3000,
    arrows: true,
    arrowsType: 'dark',
    dots: true,
    dotsColor: '#bc2f2e',
    dotsSize: 'large',
  }
  return (
    <Swiper {...setting}>
      {items.map(item => (
        <div key={item.imgurl}>
          <img src={item.imgurl} alt="slick" />
        </div>
      ))}
    </Swiper>
  )
}

@connect(
  state => ({
    findMusic: state.findMusic,
  }),
  {
    fetchSwiperImg,
  },
)
export default class SwiperPage extends Component {
  componentDidMount() {
    const { swiperImg } = this.props.findMusic
    if (!swiperImg.length) {
      this.props.fetchSwiperImg()
    }
  }
  render() {
    const { swiperImg } = this.props.findMusic

    return <div className="special-page">{swiperImg.length && renderSwiper(swiperImg)}</div>
  }
}
