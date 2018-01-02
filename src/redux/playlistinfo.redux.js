import axios from 'axios';
import {getPlaylistInfo} from '../axios/api';

// constant
const PLAYLIST = "PLAYLIST";

// initial state
const initState = {
  playlist: null
}

// reducer
export function playlistinfo(state = initState, action) {
  switch (action.type) {
    case PLAYLIST:
      return {
        ...state,
        playlist: action.payload
      };
    default:
      return {
        ...state
      }
  }
}

// action creator
function getPlaylistAct(playlist) {
  return {type: PLAYLIST, payload: playlist}
}

// logic operation
export function getPlaylist(id) {
  return dispatch => {
    axios
      .get(getPlaylistInfo(id))
      .then(res => {
        dispatch(getPlaylistAct(res.data.playlist))
      })
      .catch(err => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
      })
  }
}