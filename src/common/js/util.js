export const formatTimeStamp = (timeStamp) => {
  const time = new Date(timeStamp)
  const year = time.getFullYear()
  const month = time.getMonth()
  const day = time.getDate()
  return `${year}-${month}-${day} `
}

export const specIndex = (i) => {
  if (i < 10) {
    return `0${i}`
  }
  return i
}


export const formatDuration = (ms) => {
  const duration = ms / 1000
  const min = parseInt(duration / 60, 10)
  const sec = parseInt(duration - (min * 60), 10)
  return `${specIndex(min)}:${specIndex(sec)}`
}

export const formatCurrentTime = (cdt) => {
  let min = parseInt(cdt / 60, 10)
  let sec = parseInt(cdt - (min * 60), 10)
  min = specIndex(min)
  sec = specIndex(sec)
  return `${min}:${sec}`
}
