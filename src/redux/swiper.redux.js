import axios from 'axios'
import { swiperUrl } from '../config/api'
// constant
const SWIPER_FETCH_START = 'SWIPER_FETCH_START'
const SWIPER_FETCH_END = 'SWIPER_FETCH_END'

// initial State
const initState = {
  isFetching: false,
  items: [],
}

// reducer
export const swiper = (state = initState, action) => {
  switch (action.type) {
    case SWIPER_FETCH_START:
      return {
        ...state,
        isFetching: true,
      }
    case SWIPER_FETCH_END:
      return {
        ...state,
        isFetching: false,
        items: [...action.payload],
      }
    default:
      return {
        ...state,
      }
  }
}

// action creator
const fetchStartAct = () => ({
  type: SWIPER_FETCH_START,
})

const fetchEndAct = items => ({
  type: SWIPER_FETCH_END,
  payload: items,
})

// login operation
export const fetchSwiperImg = () => (dispatch) => {
  dispatch(fetchStartAct())
  axios
    .get(swiperUrl)
    .then((res) => {
      dispatch(fetchEndAct(res.data))
    })
    .catch((err) => {
      console.log('====================================')
      console.log(err)
      console.log('====================================')
    })
}
