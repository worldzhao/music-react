import axios from 'axios'
import { message } from 'antd'

import {
  PLAYER_PLAY_SONG,
  PLAYER_ADD_SONG,
  PLAYER_CHANGE_SONG,
  PLAYER_CLEAR_QUEUE,
  PLAYER_DELETE_SONG,
  INIT_STARRED_LIST,
  PLAYER_UPDATE_STATUS,
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
      message.error('歌曲直链不存在')
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
      message.error('歌曲直链不存在')
    }
  })
}

const initStarredListAct = allList => ({
  type: INIT_STARRED_LIST,
  payload: allList,
})

// 初始化本地数据操作
export const initStarredList = () => (dispatch) => {
  const allStarredList = JSON.parse(localStorage.getItem('allStarredList')) || []
  dispatch(initStarredListAct(allStarredList))
}

// 收藏歌单操作
export const star = item => (dispatch) => {
  // 先处理本地存储
  const allStarredList = JSON.parse(localStorage.getItem('allStarredList')) || []
  allStarredList.push(item)
  localStorage.setItem('allStarredList', JSON.stringify(allStarredList))
  dispatch(initStarredListAct(allStarredList))
}

// 取消收藏歌单
export const cancelStar = id => (dispatch) => {
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
  dispatch(initStarredListAct(allStarredList))
}

// 更新播放状态
export const updatePlayerStatus = status => ({
  type: PLAYER_UPDATE_STATUS,
  payload: status,
})
