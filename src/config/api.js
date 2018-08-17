// 歌手信息 参数：歌手id
export function artistInfoUrl(artistid) {
  return `https://api.imjad.cn/cloudmusic/?type=artist&id=${artistid}`
}

// 歌单详情 参数：歌单id
export function playlistInfoUrl(playlistid) {
  return `https://api.imjad.cn/cloudmusic/?type=playlist&id=${playlistid}`
}

// 获取歌曲资源链接
export function Mp3Url(id) {
  return `https://api.imjad.cn/cloudmusic/?type=song&id=${id}`
}

// 获取歌词
export function lyricUrl(id) {
  return `https://api.imjad.cn/cloudmusic/?type=lyric&id=${id}`
}

// 精品歌单 参数 limit pagenum
export function topPlaylist(limit) {
  return `/api/top/playlist?limit=${limit}`
}

// 轮播图
// export const swiperUrl = 'http://112.74.56.114:8888/NetEaseMusicServer/image'

// 排行榜
// export const toplistUrl = 'http://112.74.56.114:8888/NetEaseMusicServer/fuckzzw'

export const swiperUrl = '/api/swiper.json'

export const toplistUrl = '/api/toplist.json'

// 查找歌曲
export function searchSong(keyword) {
  return `https://api.imjad.cn/cloudmusic/?type=search&search_type=1&s=${keyword}`
}

// 查找歌手
export function searchArtist(keyword) {
  return `https://api.imjad.cn/cloudmusic/?type=search&search_type=100&s=${keyword}`
}

// 查找歌单
export function searchPlaylist(keyword) {
  return `https://api.imjad.cn/cloudmusic/?type=search&search_type=1000&s=${keyword}`
}
