import { PLAYLIST_INFO } from './actionTypes'

// initial state
const initState = {
  playlist: null,
}

// reducer
export default (state = initState, action) => {
  switch (action.type) {
    case PLAYLIST_INFO:
      return {
        ...state,
        playlist: action.payload,
        isFetching: false,
      }
    default:
      return {
        ...state,
      }
  }
}
