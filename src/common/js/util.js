export const formatTimeStamp = (timeStamp) => {
  const time = new Date(timeStamp);
  let year = time.getFullYear(),
    month = time.getMonth(),
    day = time.getDay(),
    hours = time.getHours(),
    minute = time.getMinutes(),
    seconds = time.getSeconds();
  return `${year}-${month}-${day} `
};

export const specIndex = (i) => {
  return i < 10 ? "0" + i : i;
};

export const formatDuration = (ms) => {
  let duration = ms / 1000;
  let min = parseInt(duration / 60, 10);
  let sec = parseInt(duration - min * 60, 10);
  return specIndex(min) + ':' + specIndex(sec);
};
