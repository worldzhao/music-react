import { combineReducers } from 'redux'
import { reducer as playQueueReducer } from '../basicLayout/store'
import { reducer as artistInfoReducer } from '../views/artist-info/store'
import { reducer as findMusicReducer } from '../views/find-music/store'
import { reducer as toplistReducer } from '../views/toplist/store'
import { reducer as playlistInfoReducer } from '../views/playlist-info/store'
import { reducer as LyricReducer } from '../views/lyric-box/store'

const reducer = combineReducers({
  artistInfo: artistInfoReducer,
  playQueue: playQueueReducer,
  findMusic: findMusicReducer,
  toplist: toplistReducer,
  playlistInfo: playlistInfoReducer,
  lyric: LyricReducer,
})

export default reducer
