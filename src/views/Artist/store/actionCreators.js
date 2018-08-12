import axios from 'axios'
import { ARTIST_INFO } from './actionTypes'
import { artistInfoUrl } from '../../../config/api'

export const getArtistInfoAction = artistInfo => ({
  type: ARTIST_INFO,
  payload: artistInfo,
})

// ajax统一错误处理 统一loading处理
export const getArtistInfoEffect = id => (dispatch) => {
  axios.get(artistInfoUrl(id)).then((res) => {
    dispatch(getArtistInfoAction(res.data))
  })
}
