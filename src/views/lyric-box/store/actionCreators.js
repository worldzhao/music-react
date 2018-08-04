import axios from 'axios'
import { LYRIC } from './actionTypes'
import { lyricUrl } from '../../../config/api'

const getLyricAction = data => ({
  type: LYRIC,
  payload: data,
})

export const fetchLyric = id => (dispatch) => {
  axios.get(lyricUrl(id)).then((res) => {
    dispatch(getLyricAction(res.data))
  })
}
