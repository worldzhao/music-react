import {combineReducers} from 'redux';
import {songcardlist} from './songcardlist.redux';
import {playqueue} from './playqueue.redux';
export default combineReducers({songcardlist,playqueue})
