/* eslint-disable */

export const formatTimeStamp = timeStamp => {
  const time = new Date(timeStamp)
  const year = time.getFullYear()
  const month = time.getMonth()
  const day = time.getDate()
  return `${year}-${month + 1}-${day} `
}

export const specIndex = i => {
  if (i < 10) {
    return `0${i}`
  }
  return i
}

export const formatDuration = ms => {
  const duration = ms / 1000
  const min = parseInt(duration / 60, 10)
  const sec = parseInt(duration - min * 60, 10)
  return `${specIndex(min)}:${specIndex(sec)}`
}

export const formatCurrentTime = cdt => {
  let min = parseInt(cdt / 60, 10)
  let sec = parseInt(cdt - min * 60, 10)
  min = specIndex(min)
  sec = specIndex(sec)
  return `${min}:${sec}`
}

export function debounce(fn, interval) {
  let timer
  return function debounceFn(...args) {
    clearTimeout(timer)
    const that = this // 当前的this
    timer = setTimeout(() => {
      fn.apply(that, args)
    }, interval)
  }
}

export function throttle(fn, interval) {
  const firstTime = true
  let timer

  return function throttleFn(...args) {
    const that = this
    if (firstTime) {
      fn.call(that, args)
    }

    if (timer) {
      return false
    }

    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      fn.apply(that, args)
    }, interval || 500)

    return true
  }
}
