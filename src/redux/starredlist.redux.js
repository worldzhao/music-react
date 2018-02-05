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
const initState = {
  items: [],
}

// reducer
export function starredlist(state = initState, action) {
  switch (action.type) {
    case INIT_STARRED_LIST:
      return {
        ...state,
        items: [...state.items, ...action.payload],
      }
    case STAR_LIST:
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    default:
      return {
        ...state,
      }
  }
}

// login operation

// 初始化本地数据操作
export function initStarredList() {
  return (dispatch) => {
    const allStarredList =
      JSON.parse(localStorage.getItem('allStarredList')) || []
    dispatch(initStarredListAct(allStarredList))
  }
}

// 收藏歌单操作
export function star(item) {
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
