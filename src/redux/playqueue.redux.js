import axios from 'axios';
import {getMp3Url} from '../axios/api';

// constant
const PLAY_SONG = 'PLAY_SONG';
const ADD_SONG = 'ADD_SONG';
const DELETE_SONG = "DELETE_SONG";

const initState = {
  playlist: [
    {
      al: {
        name:'Maps',
        picUrl:'http://orot63356.bkt.clouddn.com/cover_maps.jpg'
      },
      ar: [
        {
          id:1111,
          name:"maroon5"
        }
      ],
      url:'http://orot63356.bkt.clouddn.com/maps.mp3',
      cdt: "00:00",
      dt: 237821,
      name: "maps",
      id: 123456,
  },
  {
    al: {
      name:'山居岁月',
      picUrl:'http://orot63356.bkt.clouddn.com/cover_yhczw.jpg'
    },
    ar: [
      {
        id:2222,
        name:"山居岁月"
      }
    ],
    url:'http://orot63356.bkt.clouddn.com/yhczw.mp3',
    cdt: "00:00",
    dt: 237291,
    name: "萤火虫之舞",
    id: 123457
  },
  {
    al: {
      id:2716009,
      name:"The SOULBOY Collection",
      pic:5771336534245379,
      picUrl:"https://p1.music.126.net/C5aWA5i1pYSX24OrN6xQkg==/5771336534245379.jpg"
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
    url: "http://orot63356.bkt.clouddn.com/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E6%98%A5%E9%A3%8E%E5%90%B9%E4%B9%8B%E5%90%B9%E5%90%B9%E9%A3%8EMIX.mp3"
  }
  ],
  song: {
    al: {
      id:2716009,
      name:"The SOULBOY Collection",
      pic:5771336534245379,
      picUrl:"https://p1.music.126.net/C5aWA5i1pYSX24OrN6xQkg==/5771336534245379.jpg"
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
    url: "http://orot63356.bkt.clouddn.com/%E6%96%B9%E5%A4%A7%E5%90%8C%20-%20%E6%98%A5%E9%A3%8E%E5%90%B9%E4%B9%8B%E5%90%B9%E5%90%B9%E9%A3%8EMIX.mp3"
  },
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
    default:
      return state;
  }
}

// action creator
function playSong(song) {
  return {type: PLAY_SONG, payload: song}
}

function addSong(song) {
  return {type: ADD_SONG, payload: song}
}

// logic operation

// SongList
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
        dispatch(playSong(song));
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
        dispatch(addSong(song));
      })
  }
}

// Player
export function changeSong(){

}