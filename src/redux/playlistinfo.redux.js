import axios from 'axios'
import { playlistInfoUrl } from '../config/api'

// constant
const PLAYLIST_FENTCH_END = 'PLAYLIST_FENTCH_END'
const PLAYLIST_FETCH_START = 'PLAYLIST_FETCH_START'

// initial state
const initState = {
  playlist: null,
  isFetching: false,
}

// reducer
export function playlistinfo(state = initState, action) {
  switch (action.type) {
    case PLAYLIST_FENTCH_END:
      return {
        ...state,
        playlist: action.payload,
        isFetching: false,
      }
    case PLAYLIST_FETCH_START:
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
function FetchEndAct(playlist) {
  return { type: PLAYLIST_FENTCH_END, payload: playlist }
}

function FetchStartAct() {
  return {
    type: PLAYLIST_FETCH_START,
  }
}

// logic operation
export function fetchPlaylist(id) {
  return (dispatch) => {
    // 异步开始
    dispatch(FetchStartAct())
    axios
      .get(playlistInfoUrl(id))
      .then((res) => {
        // 异步结束
        dispatch(FetchEndAct(res.data.playlist))
      })
      .catch((err) => {
        console.log('====================================')
        console.log(err)
        console.log('====================================')
      })
  }
}
