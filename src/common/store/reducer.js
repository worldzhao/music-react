import {
  PLAYER_PLAY_SONG,
  PLAYER_ADD_SONG,
  PLAYER_CHANGE_SONG,
  PLAYER_CLEAR_QUEUE,
  PLAYER_DELETE_SONG,
  INIT_STARRED_LIST,
  PLAYER_UPDATE_STATUS,
} from './actionTypes'

const song = {
  name: '小相思（demo）',
  id: 419375586,
  pst: 0,
  t: 0,
  artists: [
    {
      id: 8103,
      name: '花粥',
      tns: [],
      alias: [],
    },
  ],
  alia: [],
  pop: 100,
  st: 0,
  rt: '',
  fee: 0,
  v: 51,
  crbt: null,
  cf: '',
  album: {
    id: 3078773,
    name: '很多无处存放的歌曲',
    picUrl: 'https://p1.music.126.net/J_oFMgT9IzcbTlr0_ZtthQ==/18225504742452490.jpg',
    tns: [],
    pic_str: '18225504742452490',
    pic: 18225504742452490,
  },
  dt: 184737,
  h: null,
  m: {
    br: 160000,
    fid: 0,
    size: 3695849,
    vd: -0.83,
  },
  l: {
    br: 96000,
    fid: 0,
    size: 2217527,
    vd: -0.83,
  },
  a: null,
  cd: '1',
  no: 18,
  rtUrl: null,
  ftype: 0,
  rtUrls: [],
  djId: 0,
  copyright: 2,
  s_id: 0,
  mst: 9,
  cp: 0,
  mv: 0,
  rtype: 0,
  rurl: null,
  publishTime: 1388505600000,
  url: 'http://sc1.111ttt.cn/2014/1/09/02/2021948508.mp3',
}

const initState = {
  playlist: [song],
  song,
  index: 0,
  flag: '',
  currentTime: 0,
  isPlaying: false,
  starredList: [],
}

export default (state = initState, action) => {
  let delIndex
  const stateTemp = JSON.parse(JSON.stringify(state))
  const { playlist } = stateTemp
  const len = playlist.length
  switch (action.type) {
    case PLAYER_PLAY_SONG:
      return {
        ...state,
        playlist: [action.payload, ...state.playlist],
        song: action.payload,
        index: 0,
        flag: PLAYER_PLAY_SONG,
      }

    case PLAYER_ADD_SONG:
      return {
        ...state,
        playlist: [...state.playlist, action.payload],
        flag: PLAYER_ADD_SONG,
      }

    case PLAYER_CHANGE_SONG:
      return {
        ...state,
        song: action.payload.song,
        index: action.payload.index,
        flag: action.payload.flag,
      }
    case PLAYER_DELETE_SONG:
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
        index: state.index ? state.index - 1 : state.playlist.length - 1,
      }
    case PLAYER_CLEAR_QUEUE:
      return {
        ...initState,
      }
    case PLAYER_UPDATE_STATUS:
      return {
        ...state,
        ...action.payload,
      }
    case INIT_STARRED_LIST:
      return { ...state, starredList: [...action.payload] }
    default:
      return state
  }
}
