import axios from 'axios'
import { toplistUrl } from '../config/api'

// constant 不能重名
const TOPLIST_FETCH_START = 'TOPLIST_FETCH_START'
const TOPLIST_FETCH_END = 'TOPLIST_FETCH_END'

// action creator
const fetchStartAct = () => ({
  type: TOPLIST_FETCH_START,
})

const fetchEndAct = data => ({
  type: TOPLIST_FETCH_END,
  payload: data,
})

// initial state
const initState = {
  data: null,
  isFetching: false,
}

// reducer
export function toplist(state = initState, action) {
  switch (action.type) {
    case TOPLIST_FETCH_START:
      return {
        ...state,
        isFetching: true,
      }
    case TOPLIST_FETCH_END:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      }
    default:
      return {
        ...state,
      }
  }
}

// logic operation
export function fetchToplist() {
  return (dispatch) => {
    dispatch(fetchStartAct())
    axios.get(toplistUrl).then((res) => {
      dispatch(fetchEndAct(res.data))
    }).catch((err) => {
      console.log('====================================')
      console.log(err)
      console.log('====================================')
    })
  }
}
