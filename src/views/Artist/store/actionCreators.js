import request from '@common/request'
import { ARTIST_INFO } from './actionTypes'
import { artistInfoUrl } from '../../../config/api'

export const getArtistInfoAction = artistInfo => ({
  type: ARTIST_INFO,
  payload: artistInfo,
})

export const getArtistInfoEffect = id => (dispatch) => {
  request.get(artistInfoUrl(id)).then((data) => {
    dispatch(getArtistInfoAction(data))
  })
}
