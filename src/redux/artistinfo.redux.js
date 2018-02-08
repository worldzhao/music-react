import axios from 'axios'
import { artistInfoUrl } from '../config/api'

// constant
const AR_FENTCH_END = 'AR_FENTCH_END'
const AR_FETCH_START = 'AR_FETCH_START'

// initial state
const initState = {
  artistDetail: null,
  isFetching: false,
}

// reducer
export const artistinfo = (state = initState, action) => {
  switch (action.type) {
    case AR_FENTCH_END:
      return {
        ...state,
        artistDetail: action.payload,
        isFetching: false,
      }
    case AR_FETCH_START:
      return {
        ...state,
        isFetching: true,
      }
    default:
      return {
        ...state,
      }
  }
}

// action creator
const FetchEndAct = artistDetail => ({ type: AR_FENTCH_END, payload: artistDetail })

const FetchStartAct = () => ({
  type: AR_FETCH_START,
})

// logic operation
export const fetchArtistInfo = id => (dispatch) => {
  // 异步开始
  dispatch(FetchStartAct())
  axios
    .get(artistInfoUrl(id))
    .then((res) => {
      // 异步结束
      dispatch(FetchEndAct(res.data))
    })
    .catch((err) => {
      console.log('====================================')
      console.log(err)
      console.log('====================================')
    })
}
