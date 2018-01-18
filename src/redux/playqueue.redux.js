import axios from 'axios'
import { getMp3Url } from '../config/api'

// constant
const PLAY_SONG = 'PLAY_SONG'
const ADD_SONG = 'ADD_SONG'
const DELETE_SONG = 'DELETE_SONG'
const CHANGE_SONG = 'CHANGE_SONG'

// inital state
const initState = {
  playlist: [
    {
      al: {
        id: 30614,
        name: '3/8',
        pic: 74766790706391,
        picUrl: 'https://p1.music.126.net/N1pCSE3EtocC7NowAAuEHQ==/74766790706391.jpg',
        tns: [],
      },
      ar: [
        {
          id: 9952,
          name: '谢安琪',
          tns: [],
        },
      ],
      dt: 277029,
      name: '钟无艳',
      id: 308353,
      url: 'https://m7.music.126.net/20180118142828/561819d1cacc8ef02c0474565bdfc57a/ymusic/32f7/cc71/dbc9/09af651475597148f47bc7dbcc03e64a.mp3',
    },
  ],
  song: {
    al: {
      id: 30614,
      name: '3/8',
      pic: 74766790706391,
      picUrl: 'https://p1.music.126.net/N1pCSE3EtocC7NowAAuEHQ==/74766790706391.jpg',
      tns: [],
    },
    ar: [
      {
        id: 9952,
        name: '谢安琪',
        tns: [],
      },
    ],
    dt: 277029,
    name: '钟无艳',
    id: 308353,
    url: 'https://m7.music.126.net/20180118142828/561819d1cacc8ef02c0474565bdfc57a/ymusic/32f7/cc71/dbc9/09af651475597148f47bc7dbcc03e64a.mp3',
  },
  index: 0,
  flag: '',
}

// reducer
export function playqueue(state = initState, action) {
  let delIndex
  const { playlist } = state
  const len = playlist.length
  const isContain = (id) => {
    for (let i = 0; i < len; i += 1) {
      const song = playlist[i]
      if (song.id === id) {
        return true
      }
    }
    return false
  }
  switch (action.type) {
    case PLAY_SONG:
      // 歌曲列表中已经存在的歌曲不允许再次添加
      if (isContain(action.payload.id)) {
        return {
          ...state,
        }
      }
      return {
        ...state,
        playlist: [
          action.payload, ...state.playlist,
        ],
        flag: PLAY_SONG,
      }

    case ADD_SONG:
      // 歌曲列表中已经存在的歌曲不允许再次添加
      if (isContain(action.payload.id)) {
        return {
          ...state,
        }
      }
      return {
        ...state,
        playlist: [
          ...state.playlist,
          action.payload,
        ],
        flag: ADD_SONG,
      }

    case CHANGE_SONG:
      return {
        ...state,
        song: action.payload.song,
        index: action.payload.index,
        flag: action.payload.flag,
      }
    case DELETE_SONG:
      // 记录要删除歌曲的数组下标
      for (let i = 0; i < len; i += 1) {
        if (playlist[i].id === action.payload) {
          delIndex = i
        }
      }
      playlist.splice(delIndex, 1)
      return {
        ...state,
        playlist,
        // 删除歌曲后记得改变当前播放歌曲的index
        index: state.index
          ? state.index - 1
          : state.playlist.length - 1,
      }
    default:
      return state
  }
}

// action creator
function playSongAct(song) {
  return { type: PLAY_SONG, payload: song }
}

function addSongAct(song) {
  return { type: ADD_SONG, payload: song }
}

function changeSongAct({ song, index, flag }) {
  return {
    type: CHANGE_SONG,
    payload: {
      song,
      index,
      flag,
    },
  }
}

function deleteSongAct(id) {
  return { type: DELETE_SONG, payload: id }
}

// logic operation SongList
export function playSong2Que(s) {
  return (dispatch) => {
    axios
      .get(getMp3Url(s.id))
      .then((res) => {
        const { url } = res.data.data[0]
        const song = {
          ...s,
          url,
        }
        dispatch(playSongAct(song))
      })
  }
}

export function addSong2Que(s) {
  return (dispatch) => {
    axios
      .get(getMp3Url(s.id))
      .then((res) => {
        const { url } = res.data.data[0]
        const song = {
          ...s,
          url,
        }
        dispatch(addSongAct(song))
      })
  }
}

// Player
export function changeSong({ song, index, f }) {
  return (dispatch) => {
    const flag = f || ''
    dispatch(changeSongAct({ song, index, flag }))
  }
}

// ReadyList
export function deleteSong(id) {
  return (dispatch) => {
    dispatch(deleteSongAct(id))
  }
}
