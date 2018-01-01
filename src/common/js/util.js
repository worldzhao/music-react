export const formatTimeStamp = (timeStamp) => {
  const time = new Date(timeStamp);
  let year = time.getFullYear(),
    month = time.getMonth(),
    day = time.getDate();
  return `${year}-${month}-${day} `
};

export const specIndex = (i) => {
  return i < 10
    ? "0" + i
    : i;
};

export const formatDuration = (ms) => {
  let duration = ms / 1000;
  let min = parseInt(duration / 60, 10);
  let sec = parseInt(duration - min * 60, 10);
  return specIndex(min) + ':' + specIndex(sec);
};

export const formatCurrentTime = (cdt) => {
  let min = parseInt(cdt / 60, 10);
  let sec = parseInt(cdt - min * 60, 10);
  min = specIndex(min);
  sec = specIndex(sec);
  return `${min}:${sec}`;
}