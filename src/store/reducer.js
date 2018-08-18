import { combineReducers } from 'redux'
import { reducer as playQueueReducer } from '../common/store'
import { reducer as artistInfoReducer } from '../views/Artist/store'
import { reducer as findMusicReducer } from '../views/FindMusic/store'
import { reducer as playlistInfoReducer } from '../views/Playlist/store'

const reducer = combineReducers({
  artistInfo: artistInfoReducer,
  playQueue: playQueueReducer,
  findMusic: findMusicReducer,
  playlistInfo: playlistInfoReducer,
})

export default reducer
