import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'react-slick'
import Loading from '../../../component/loading/'
import { fetchSwiperImg } from '../../../redux/swiper.redux'

import './style.styl'

const renderSwiper = (items) => {
  if (!items.length) return null
  const settings = {
    adaptiveHeight: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  }
  return (
    <Slider {...settings}>
      {items.map(item => (
        <div key={item.imgurl}>
          <img src={item.imgurl} alt="slick" style={{ margin: '0 auto' }} />
        </div>
      ))}
    </Slider>
  )
}

@connect(
  state => ({
    swiperObj: state.swiper,
  }),
  {
    fetchSwiperImg,
  },
)
export default class SwiperPage extends Component {
  componentDidMount() {
    const { items } = this.props.swiperObj
    if (!items.length) {
      this.props.fetchSwiperImg()
    }
  }
  render() {
    const { isFetching, items } = this.props.swiperObj
    return (
      <div className="special-page">
        {isFetching ? <Loading /> : renderSwiper(items)}
      </div>
    )
  }
}
