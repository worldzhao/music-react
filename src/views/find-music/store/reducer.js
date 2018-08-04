import { CARD_LIST, RECORD_SCROLL, SWIPER_IMG } from './actionTypes'

const initState = {
  cardList: [],
  pageNum: 0,
  limit: 48,
  scrollPoint: 0,
  swiperImg: [],
}

// reducer
export default (state = initState, action) => {
  switch (action.type) {
    case CARD_LIST:
      return {
        ...state,
        cardList: [...state.cardList, ...action.payload.list],
        pageNum: state.pageNum + 1,
      }
    case RECORD_SCROLL:
      return {
        ...state,
        scrollPoint: action.payload,
      }
    case SWIPER_IMG:
      return {
        ...state,
        isFetching: false,
        swiperImg: [...action.payload],
      }
    default:
      return state
  }
}
