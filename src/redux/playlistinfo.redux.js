import axios from 'axios'
import { getPlaylistInfo } from '../config/api'

// constant
const PLAYLIST = 'PLAYLIST'
const CLEARLIST = 'CLEARLIST'

// initial state
const initState = {
  playlist: null,
  isRequest: true,
}

// reducer
export function playlistinfo(state = initState, action) {
  switch (action.type) {
    case PLAYLIST:
      return {
        ...state,
        playlist: action.payload,
        isRequest: false,
      }
    case CLEARLIST:
      return {
        ...state,
        isRequest: true,
      }
    default:
      return {
        ...state,
      }
  }
}

// action creator
function getPlaylistAct(playlist) {
  return { type: PLAYLIST, payload: playlist }
}

function clearListAct() {
  return {
    type: CLEARLIST,
  }
}

// logic operation
export function getPlaylist(id) {
  return (dispatch) => {
    axios
      .get(getPlaylistInfo(id))
      .then((res) => {
        dispatch(getPlaylistAct(res.data.playlist))
      })
      .catch((err) => {
        console.log('====================================')
        console.log(err)
        console.log('====================================')
      })
  }
}

export function clearList() {
  return (dispatch) => {
    dispatch(clearListAct())
  }
}
