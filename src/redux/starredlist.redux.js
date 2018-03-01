// constant
const STAR_LIST = 'STAR_LIST'
const INIT_STARRED_LIST = 'INIT_STRRED_LIST'
// action creator
const initStarredListAct = allList => ({
  type: INIT_STARRED_LIST,
  payload: allList,
})
const starListAct = list => ({
  type: STAR_LIST,
  payload: list,
})

// initial State
// 扁平化state 提高shouldComponentUpdate比较效率
const initState = []

// reducer
export const starredlist = (state = initState, action) => {
  switch (action.type) {
    case INIT_STARRED_LIST:
      return [...action.payload]
    case STAR_LIST:
      return [...state, action.payload]
    default:
      return [...state]
  }
}

// login operation

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
