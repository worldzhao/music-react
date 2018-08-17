import axios from 'axios'
import { CARD_LIST, SWIPER_IMG } from './actionTypes'
import { topPlaylist, bannerUrl } from '../../../config/api'

export const getCardListAction = list => ({
  type: CARD_LIST,
  payload: { list },
})

export const fetchCardList = limit => (dispatch) => {
  axios.get(topPlaylist(limit)).then((res) => {
    const { data } = res
    if (data.code === 200) {
      dispatch(getCardListAction(data.playlists))
    }
  })
}

export const getSwiperImgAction = swiperImg => ({
  type: SWIPER_IMG,
  payload: swiperImg,
})

export const fetchSwiperImg = () => (dispatch) => {
  axios.get(bannerUrl).then((res) => {
    const { data } = res
    dispatch(getSwiperImgAction(data.banners))
  })
}
