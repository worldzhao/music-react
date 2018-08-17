import { CARD_LIST, SWIPER_IMG } from './actionTypes'

const initState = {
  cardList: [],
  swiperImg: [],
}

// reducer
export default (state = initState, action) => {
  switch (action.type) {
    case CARD_LIST:
      return {
        ...state,
        cardList: [...action.payload.list],
      }
    case SWIPER_IMG:
      return {
        ...state,
        swiperImg: [...action.payload],
      }
    default:
      return state
  }
}
