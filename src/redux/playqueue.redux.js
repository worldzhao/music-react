import axios from 'axios';
import {getMp3Url} from '../axios/api';

// constant
const PLAY_SONG = 'PLAY_SONG';
const ADD_SONG = 'ADD_SONG';
const DELETE_SONG = "DELETE_SONG";
const CHANGE_SONG = 'CHANGE_SONG';

// inital state
const initState = {
  playlist: [
    {
      al: {
        id: 19316,
        name: "遥远的她.Amour",
        pic: 43980465112095,
        picUrl: "https://p1.music.126.net/rxyLRMZdqzHdxyP5cl8qQA==/43980465112095.jpg",
        tns: []
      },
      ar: [
        {

          id: 6460,
          name: "张学友",
          tns: []
        }
      ],
      dt: 259813,
      name: "遥远的她",
      id: 191232,
      url: "https://m7.music.126.net/20180102222713/1d5d4043756cad752095d149a8199e8e/ymusic/c91b/17f3/70b9/1d8753528eb5196aa11de679df618cc7.mp3"  
    }
  ],
  song: {
    al: {
      id: 19316,
      name: "遥远的她.Amour",
      pic: 43980465112095,
      picUrl: "https://p1.music.126.net/rxyLRMZdqzHdxyP5cl8qQA==/43980465112095.jpg",
      tns: []
    },
    ar: [
      {

        id: 6460,
        name: "张学友",
        tns: []
      }
    ],
    dt: 259813,
    name: "遥远的她",
    id: 191232,
    url: "https://m7.music.126.net/20180102222713/1d5d4043756cad752095d149a8199e8e/ymusic/c91b/17f3/70b9/1d8753528eb5196aa11de679df618cc7.mp3"  
  },
  index: 0,
  flag: ''
}

// reducer
export function playqueue(state = initState, action) {
  let {playlist} = state;
  let len = playlist.length;
  const isContain = (id) => {
    for (let i = 0; i < len; i++) {
      const song = playlist[i];
      if (song.id === id) {
        return true;
      }
    }
    return false;
  }
  switch (action.type) {
    case PLAY_SONG:
      // 歌曲列表中已经存在的歌曲不允许再次添加
      if (isContain(action.payload.id)) {
        return {
          ...state
        }
      } else {
        return {
          ...state,
          playlist: [
            action.payload, ...state.playlist
          ],
          flag: PLAY_SONG
        };
      }
    case ADD_SONG:
      // 歌曲列表中已经存在的歌曲不允许再次添加
      if (isContain(action.payload.id)) {
        return {
          ...state
        }
      } else {
        return {
          ...state,
          playlist: [
            ...state.playlist,
            action.payload
          ],
          flag: ADD_SONG
        };
      }
    case CHANGE_SONG:
      return {
        ...state,
        song: action.payload.song,
        index: action.payload.index,
        flag: action.payload.flag
      }
    case DELETE_SONG:
      // 记录要删除歌曲的数组下标
      let delIndex;
      for (let i = 0; i < len; i++) {
        const song = playlist[i];
        if (playlist[i].id === action.payload) {
          delIndex = i;
        }
      }
      playlist.splice(delIndex, 1);
      return {
        ...state,
        playlist,
        // 删除歌曲后记得改变当前播放歌曲的index
        index: state.index
          ? state.index - 1
          : state.playlist.length - 1
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

function changeSongAct({song, index, flag}) {
  return {
    type: CHANGE_SONG,
    payload: {
      song,
      index,
      flag
    }
  }
}

function deleteSongAct(id) {
  return {type: DELETE_SONG, payload: id}
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
export function deleteSong(id) {
  return dispatch => {
    dispatch(deleteSongAct(id))
  }
}