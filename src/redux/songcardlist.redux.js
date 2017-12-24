import axios from 'axios';
import {getRecmdPlaylistURL} from '../axios/api'
// constant
const CARD_LIST = 'CARD_LIST';

// action creator
function cardList(list) {
  return {
    type: CARD_LIST,
    payload: list
  }
}

// initial state
const initialState = {
  cardlist: [],
  pagenum: 0,
  limit: 24
};

// reducer
export function songcardlist(state = initialState, action) {
  switch (action.type) {
    case CARD_LIST:
      return {
        ...state,
        cardlist: [...state.cardlist, ...action.payload],
        pagenum: state.pagenum + 1,
      };
    default:
      return state;
  }
}

// logic operation
export function getCardList(pagenum,limit) {
  return dispatch=>{
    axios.get(getRecmdPlaylistURL(limit,pagenum)).then((res) => {
      dispatch(cardList(res.data));
    }).catch((error)=>{
      console.log(error);
    })
  }
}
