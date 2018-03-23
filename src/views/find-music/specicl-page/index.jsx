import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSwiperImg } from '../../../redux/swiper.redux'
import Swiper from '../../../component/Swiper/Swiper'
import Loading from '../../../component/loading/'

import './style.styl'

const renderSwiper = items => (
  <Swiper>
    {items.map(item => (
      <div key={item.imgurl}>
        <img src={item.imgurl} alt="slick" />
      </div>
    ))}
  </Swiper>
)

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
        {isFetching ? <Loading /> : items.length && renderSwiper(items)}
      </div>
    )
  }
}
