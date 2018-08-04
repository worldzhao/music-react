import {
  PLAYER_PLAY_SONG,
  PLAYER_ADD_SONG,
  PLAYER_CHANGE_SONG,
  PLAYER_CLEAR_QUEUE,
  PLAYER_DELETE_SONG,
  STAR_LIST,
  INIT_STARRED_LIST,
} from './actionTypes'
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
      url: 'http://www.170mv.com/kw/other.web.rh01.sycdn.kuwo.cn/resource/n2/85/93/2004871240.mp3',
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
    url: 'http://www.170mv.com/kw/other.web.rh01.sycdn.kuwo.cn/resource/n2/85/93/2004871240.mp3',
  },
  index: 0,
  flag: '',
  starredList: [],
}
// reducer
export default (state = initState, action) => {
  let delIndex
  const { playlist } = state
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
    case INIT_STARRED_LIST:
      return { ...state, starredList: [...action.payload] }
    case STAR_LIST:
      return { ...state, starredList: [...state.starredList, ...action.payload] }
    default:
      return state
  }
}
