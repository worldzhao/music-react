import { TOPLIST } from './actionTypes'

const initState = {
  data: null,
}

export default (state = initState, action) => {
  switch (action.type) {
    case TOPLIST:
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
