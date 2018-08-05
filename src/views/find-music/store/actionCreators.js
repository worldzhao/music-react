import axios from 'axios'
import { CARD_LIST, RECORD_SCROLL, SWIPER_IMG } from './actionTypes'
import { getRecmdPlaylist, swiperUrl } from '../../../config/api'

export const getCardListAction = list => ({
  type: CARD_LIST,
  payload: { list },
})

export const getKeepScrollAction = scrollTop => ({
  type: RECORD_SCROLL,
  payload: scrollTop,
})

export const fetchCardList = (pageNum, limit) => (dispatch) => {
  axios.get(getRecmdPlaylist(limit, pageNum)).then((res) => {
    const { data } = res
    dispatch(getCardListAction(data.result))
  })
}

export const getSwiperImgAction = swiperImg => ({
  type: SWIPER_IMG,
  payload: swiperImg,
})

export const fetchSwiperImg = () => (dispatch) => {
  axios.get(swiperUrl).then((res) => {
    const { data } = res
    dispatch(getSwiperImgAction(data.result))
  })
}
