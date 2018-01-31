import axios from 'axios'
import { getRecmdPlaylist } from '../config/api'

// constant
const CARDLIST_FETCH_START = 'CARDLIST_FETCH_START'
const CARDLIST_FETCH_END = 'CARDLIST_FETCH_END'
const RECORD_SCROLL = 'RECORD_SCROLL'

// action creator
function fetchStartAct() {
  return {
    type: CARDLIST_FETCH_START,
  }
}

function fetchEndAct(list) {
  return {
    type: CARDLIST_FETCH_END,
    payload: { list },
  }
}

function scrollPoint(scrollTop) {
  return {
    type: RECORD_SCROLL,
    payload: scrollTop,
  }
}

// initial state
const initState = {
  cardList: [],
  pageNum: 0,
  limit: 48,
  scrollPoint: 0,
  isFetching: false,
}

// reducer
export function songcardlist(state = initState, action) {
  switch (action.type) {
    case CARDLIST_FETCH_START:
      return {
        ...state,
        isFetching: true,
      }
    case CARDLIST_FETCH_END:
      return {
        ...state,
        cardList: [...state.cardList, ...action.payload.list],
        pageNum: state.pageNum + 1,
        isFetching: false,
      }
    case RECORD_SCROLL:
      return {
        ...state,
        scrollPoint: action.payload,
      }
    default:
      return state
  }
}

// logic operation
export function fetchCardList(pageNum, limit) {
  return (dispatch) => {
    dispatch(fetchStartAct())
    axios.get(getRecmdPlaylist(limit, pageNum)).then((res) => {
      dispatch(fetchEndAct(res.data))
    }).catch((error) => {
      console.log(error)
    })
  }
}

export function keepScroll(scrollTop) {
  return (dispatch) => {
    dispatch(scrollPoint(scrollTop))
  }
}
