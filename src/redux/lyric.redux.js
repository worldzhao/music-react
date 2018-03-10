import axios from 'axios'
import { lyricUrl } from '../config/api'

// constants
const LYRIC_FETCH_START = 'LYRIC_FETCH_START'
const LYRIC_FETCH_END = 'LYRIC_FETCH_END'

// action creator
const fetchStartAct = () => ({
  type: LYRIC_FETCH_START,
})

const fetchEndAct = data => ({
  type: LYRIC_FETCH_END,
  payload: data,
})

// initial state
const initState = {
  lyricObj: null,
  isFetching: false,
}

// reducer
export const lyric = (state = initState, action) => {
  switch (action.type) {
    case LYRIC_FETCH_START:
      return {
        ...state,
        isFetching: true,
      }
    case LYRIC_FETCH_END:
      return {
        ...state,
        lyricObj: action.payload,
        isFetching: false,
      }
    default:
      return {
        ...state,
      }
  }
}

// logic operation
export const fetchLyric = id => (dispatch) => {
  dispatch(fetchStartAct())
  axios.get(lyricUrl(id)).then((res) => {
    dispatch(fetchEndAct(res.data))
  }).catch((err) => {
    console.log('====================================')
    console.log(err)
    console.log('====================================')
  })
}
