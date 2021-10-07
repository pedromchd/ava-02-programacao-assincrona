const timer = document.querySelector('#timer');
const buttons = document.querySelectorAll('button');
const alarm = new Audio('docs/diamond.mp3');
alarm.volume = 0.1;
let pomodoro;

buttons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    clearInterval(pomodoro);
    postMessage(i);
    btn.disabled = true;
    let now = (i) ? 5 : 25;
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
  //alarm.play();
    toast('POMODORO', 'O tempo definido chegou ao fim!');
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

async function toast(title, body) {
  const options = {
    body,
    image: 'pomodoro.jpg'
  };
  if ('Notification' in window) {
    if (Notification.permission === 'granted') {
      alarm.play();
      new Notification(title, options);
    } else
    if (Notification.permission === 'default') {
      const per = await Notification.requestPermission();
      if (per === 'granted') {
        alarm.play();
        new Notification(title, options);
      } else console.error('As notificações foram negadas');
    } else console.error('As notificações foram negadas');
  } else console.error('O navegador não suporta notificações');
}
