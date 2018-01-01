import axios from 'axios';
import {getMp3Url} from '../axios/api';

// constant
const PLAY_SONG = 'PLAY_SONG';
const ADD_SONG = 'ADD_SONG';
const DELETE_SONG = "DELETE_SONG";
const CHANGE_SONG = 'CHANGE_SONG';

const initState = {
  playlist: [
    {
      al: {
        id: 2716009,
        name: "The SOULBOY Collection",
        pic: 5771336534245379,
        picUrl: "https://p1.music.126.net/C5aWA5i1pYSX24OrN6xQkg==/5771336534245379.jpg"
      },
      ar: [
        {
          id: 2738,
          name: "方大同"
        }
      ],
      dt: 200109,
      name: "春风吹",
      id: 28029097,
      url: "http://orot63356.bkt.clouddn.com/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E6%98%A5%E9%" +
        "A3%8E%E5%90%B9%E4%B9%8B%E5%90%B9%E5%90%B9%E9%A3%8EMIX.mp3"
    }
  ],
  song: {
    al: {
      id: 2716009,
      name: "The SOULBOY Collection",
      pic: 5771336534245379,
      picUrl: "https://p1.music.126.net/C5aWA5i1pYSX24OrN6xQkg==/5771336534245379.jpg"
    },
    ar: [
      {
        id: 2738,
        name: "方大同"
      }
    ],
    cdt: "00:00",
    dt: 200109,
    name: "春风吹",
    id: 28029097,
    url: "http://orot63356.bkt.clouddn.com/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E6%98%A5%E9%" +
        "A3%8E%E5%90%B9%E4%B9%8B%E5%90%B9%E5%90%B9%E9%A3%8EMIX.mp3"
  },
  index: 0,
  flag: ''
}

// reducer
export function playqueue(state = initState, action) {
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        playlist: [
          action.payload, ...state.playlist
        ],
        flag: PLAY_SONG
      };
    case ADD_SONG:
      return {
        ...state,
        playlist: [
          ...state.playlist,
          action.payload
        ],
        flag: ADD_SONG
      };
    case CHANGE_SONG:
      return {
        ...state,
        song: action.payload.song,
        index: action.payload.index,
        flag: action.payload.flag
      }
    default:
      return state;
  }
}

// action creator
function playSongAct(song) {
  return {type: PLAY_SONG, payload: song}
}

function addSongAct(song) {
  return {type: ADD_SONG, payload: song}
}

function changeSongAct({song, index,flag}) {
  return {
    type: CHANGE_SONG,
    payload: {
      song,
      index,
      flag
    }
  }
}

function deleteSongAct(){
  return {
    type:DELETE_SONG,
  }
}

// logic operation SongList
export function playSong2Que(song) {
  return dispatch => {
    axios
      .get(getMp3Url(song.id))
      .then(res => {
        const {url} = res.data.data[0];
        song = {
          ...song,
          url
        };
        dispatch(playSongAct(song));
      })
  }
}

export function addSong2Que(song) {
  return dispatch => {
    axios
      .get(getMp3Url(song.id))
      .then(res => {
        const {url} = res.data.data[0];
        song = {
          ...song,
          url
        };
        dispatch(addSongAct(song));
      })
  }
}

// Player
export function changeSong({song, index, flag}) {
  return dispatch => {
    flag = flag
      ? flag
      : '';
    dispatch(changeSongAct({song, index, flag}));
  }
}

// ReadyList
export function deleteSong(){
  return dispatch => {

  }
}