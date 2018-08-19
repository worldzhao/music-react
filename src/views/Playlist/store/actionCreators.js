import axios from 'axios'
import { PLAYLIST_INFO } from './actionTypes'
import { playlistInfoUrl } from '../../../config/api'

const getPlaylistInfoAction = playlist => ({ type: PLAYLIST_INFO, payload: playlist })

export const fetchPlaylist = id => (dispatch) => {
  axios.get(playlistInfoUrl(id)).then((res) => {
    if (res.data.code === 200) {
      dispatch(getPlaylistInfoAction(res.data.playlist))
    }
  })
}
