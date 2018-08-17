import React, { Component } from 'react'
import toolbox from 'react-tiny-swiper'

const { Swiper } = toolbox

export default class SwiperPage extends Component {
  componentDidMount() {
    // do sth
  }
  render() {
    const { data } = this.props
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
      <div className="special-page">
        {data.length && (
          <Swiper {...setting}>
            {data.map(item => (
              <div key={item.picUrl}>
                <img src={item.picUrl} alt="slick" />
              </div>
            ))}
          </Swiper>
        )}
      </div>
    )
  }
}
