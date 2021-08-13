const timer = document.querySelector('#timer');
const buttons = document.querySelectorAll('button');
const alarm = new Audio('pmd/diamond.mp3');
let pomodoro;

buttons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    clearInterval(pomodoro);
    postMessage(i);
    btn.disabled = true;
    let now = (i) ? 0.1 : 25;
    now = until(now);
    pomodoro = setInterval(() => {
      timer.innerText = convert(remainingTo(now));
    }, 50);
  });
});

window.onmessage = (msg) => {
  if (msg.data !== false) {
    timer.classList.remove('red');
  } else {
    clearInterval(pomodoro);
    timer.classList.add('red');
    alarm.play();
  }
  buttons.forEach((b, i) => {
    if (i !== msg.data) b.disabled = false;
  });
}

function until(t) {
  return t * 60000 + Date.now();
}

function remainingTo(t) {
  const left = t - Date.now();
  if (left < 1000) postMessage(false);
  return left;
}

function convert(mil) {
  const min = parseInt(mil / 60000);
  mil -= min * 60000;
  const sec = parseInt(mil / 1000);
//mil -= sec * 1000;
  return getTime(min, sec);
}

function getTime(...hms) {
  hms.forEach((v, i) => {
    hms[i] = (v < 10) ? `0${v}` : v;
  });
  return hms.join(':');
}
