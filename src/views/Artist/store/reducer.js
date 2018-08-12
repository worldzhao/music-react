import { ARTIST_INFO } from './actionTypes'

// initial state
const initState = {
  data: null,
}

// reducer
export default (state = initState, action) => {
  switch (action.type) {
    case ARTIST_INFO:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}
