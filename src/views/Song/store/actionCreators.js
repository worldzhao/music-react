import axios from 'axios'
import { LYRIC_GET_LYRIC } from './actionTypes'
import { lyricUrl } from '../../../config/api'

const fetchLyricAction = data => ({
  type: LYRIC_GET_LYRIC,
  payload: data,
})

export const fetchLyric = id => (dispatch) => {
  axios.get(lyricUrl(id)).then((res) => {
    dispatch(fetchLyricAction(res.data))
  })
}
