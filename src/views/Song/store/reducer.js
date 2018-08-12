import { LYRIC } from './actionTypes'

const initState = {
  lyricObj: null,
}

export default (state = initState, action) => {
  switch (action.type) {
    case LYRIC:
      return {
        ...state,
        lyricObj: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}
