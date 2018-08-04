import axios from 'axios'
import {
  PLAYER_PLAY_SONG,
  PLAYER_ADD_SONG,
  PLAYER_CHANGE_SONG,
  PLAYER_CLEAR_QUEUE,
  PLAYER_DELETE_SONG,
  STAR_LIST,
  INIT_STARRED_LIST,
} from './actionTypes'
import { Mp3Url } from '../../config/api'

const playSongAct = song => ({ type: PLAYER_PLAY_SONG, payload: song })

const addSongAct = song => ({ type: PLAYER_ADD_SONG, payload: song })

export const changeSong = ({ song, index, flag = '' }) => ({
  type: PLAYER_CHANGE_SONG,
  payload: {
    song,
    index,
    flag,
  },
})

export const deleteSong = id => ({ type: PLAYER_DELETE_SONG, payload: id })

export const clearQueue = () => ({
  type: PLAYER_CLEAR_QUEUE,
})

// helper
const isContain = (id, playlist) => {
  const len = playlist.length
  for (let i = 0; i < len; i += 1) {
    const song = playlist[i]
    if (song.id === id) {
      return true
    }
  }
  return false
}

export const playSong2Que = s => (dispatch, getState) => {
  const { playlist } = getState().playQueue
  // 歌曲列表中已经存在的歌曲不允许再次添加
  if (isContain(s.id, playlist)) {
    return
  }
  axios.get(Mp3Url(s.id)).then((res) => {
    const { url } = res.data.data[0]
    if (url) {
      const song = {
        ...s,
        url,
      }
      dispatch(playSongAct(song))
    } else {
      alert('歌曲直链不存在')
    }
  })
}

export const addSong2Que = s => (dispatch, getState) => {
  const { playlist } = getState().playQueue
  // 歌曲列表中已经存在的歌曲不允许再次添加
  if (isContain(s.id, playlist)) {
    return
  }
  axios.get(Mp3Url(s.id)).then((res) => {
    const { url } = res.data.data[0]
    if (url) {
      const song = {
        ...s,
        url,
      }
      dispatch(addSongAct(song))
    } else {
      alert('歌曲直链不存在')
    }
  })
}

const initStarredListAct = allList => ({
  type: INIT_STARRED_LIST,
  payload: allList,
})

const starListAct = list => ({
  type: STAR_LIST,
  payload: list,
})

// 初始化本地数据操作
export const initStarredList = () => (dispatch) => {
  const allStarredList = JSON.parse(localStorage.getItem('allStarredList')) || []
  dispatch(initStarredListAct(allStarredList))
}

// 收藏歌单操作
export const star = (item) => {
  // 先处理本地存储
  let allStarredList = JSON.parse(localStorage.getItem('allStarredList'))
  if (!allStarredList) {
    allStarredList = []
  }
  allStarredList.push(item)
  localStorage.setItem('allStarredList', JSON.stringify(allStarredList))
  // 再处理redux
  return (dispatch) => {
    dispatch(starListAct(item))
  }
}

// 取消收藏歌单
export const cancelStar = (id) => {
  let index
  const allStarredList = JSON.parse(localStorage.getItem('allStarredList'))
  for (let i = 0; i < allStarredList.length; i += 1) {
    const list = allStarredList[i]
    if (list.id === id) {
      index = i
    }
  }
  allStarredList.splice(index, 1)
  localStorage.setItem('allStarredList', JSON.stringify(allStarredList))
  return (dispatch) => {
    dispatch(initStarredListAct(allStarredList))
  }
}
