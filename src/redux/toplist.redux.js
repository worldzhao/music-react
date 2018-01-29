import axios from 'axios'
import { toplistUrl } from '../config/api'

// constant
const TOP_LIST = 'TOP_LIST'

// action creator
const getToplistAct = data => ({
  type: TOP_LIST,
  payload: data,
})

// initial state
const initState = {
  toplist: null,
}

// reducer
export function toplist(state = initState, action) {
  switch (action.type) {
    case TOP_LIST:
      return {
        ...state,
        toplist: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}

// logic operation
export function getToplist() {
  return (dispatch) => {
    axios.get(toplistUrl).then((res) => {
      dispatch(getToplistAct(res.data))
    }).catch((err) => {
      console.log('====================================')
      console.log(err)
      console.log('====================================')
    })
  }
}
