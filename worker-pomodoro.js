onmessage = (msg) => {
  setInterval(() => postMessage(timer(left(msg.data))), 10);
};

function left(time) {
  return time - Date.now();
}

function timer(left) {
  let min = parseInt(left / 1000 / 60);
  left -= min * 60 * 1000;
  let sec = parseInt(left / 1000);
  sec = (sec < 10) ? `0${sec}` : sec;
  // left -= sec * 1000;
  return `${min}:${sec}`;
}
