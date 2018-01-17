import { combineReducers } from 'redux'
import { songcardlist } from './songcardlist.redux'
import { playqueue } from './playqueue.redux'
import { playlistinfo } from './playlistinfo.redux'

export default combineReducers({ songcardlist, playqueue, playlistinfo })
