import {
  PLAYER_PLAY_SONG,
  PLAYER_ADD_SONG,
  PLAYER_CHANGE_SONG,
  PLAYER_CLEAR_QUEUE,
  PLAYER_DELETE_SONG,
  INIT_STARRED_LIST,
} from './actionTypes'

const song = {
  name: 'WALK (movie ver.)',
  id: 1293904972,
  url:
    'https://m10.music.126.net/20180804202203/05186b2bdee7262c58d2a832fd79ee2a/ymusic/155a/0b83/0a45/27a7a637b2007b70f9c8df874eaf3bde.mp3',
  pst: 0,
  t: 0,
  ar: [
    {
      id: 1028044,
      name: 'ビッケブランカ',
      tns: [],
      alias: [],
    },
  ],
  alia: ['长篇动画《肆式青春》日文版主题曲'],
  pop: 100,
  st: 0,
  rt: null,
  fee: 8,
  v: 23,
  crbt: null,
  cf: '',
  al: {
    id: 71856802,
    name: '夏の夢/WALK',
    picUrl: 'https://p1.music.126.net/pVIAX6KRNtB8I4GGnzZRUw==/109951163439135057.jpg',
    tns: [],
    pic_str: '109951163439135057',
    pic: 109951163439135060,
  },
  dt: 224280,
  h: {
    br: 320000,
    fid: 0,
    size: 8973627,
    vd: -2,
  },
  m: {
    br: 192000,
    fid: 0,
    size: 5384194,
    vd: -2,
  },
  l: {
    br: 128000,
    fid: 0,
    size: 3589477,
    vd: -1,
  },
  a: null,
  cd: '1',
  no: 2,
  rtUrl: null,
  ftype: 0,
  rtUrls: [],
  djId: 0,
  copyright: 2,
  s_id: 0,
  rurl: null,
  mst: 9,
  cp: 457010,
  mv: 10739130,
  rtype: 0,
  publishTime: 1533225600007,
}

const initState = {
  playlist: [song],
  song,
  index: 0,
  flag: '',
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
    case INIT_STARRED_LIST:
      return { ...state, starredList: [...action.payload] }
    default:
      return state
  }
}
