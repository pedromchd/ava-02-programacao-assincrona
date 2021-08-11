// const qSel = document.querySelectorAll.bind(document);
// const time = qSel("#timer")[0];
// const btns = qSel("button");
// const icon = qSel("i");
// let counter;

// const alarm = new Audio('pmd/diamond.mp3');

// btns[0].addEventListener('click', () => {
//   toggle(0, 1);
//   clearInterval(counter);
//   counter = interval(count2(25));
// });

// btns[1].addEventListener('click', () => {
//   toggle(1, 0);
//   clearInterval(counter);
//   counter = interval(count2(5));
// });

// window.addEventListener("message", () => {
//   for (let b in btns) if (btns[b].disabled) onOff(b);
//   clearInterval(counter);
//   time.classList.add("red");
//   alarm.play();
// });

// function count2(t) {
//   return Date.now() + t * 60000;
// }

// function left(to) {
//   const aux = to - Date.now();
//   if (aux < 1000) postMessage(true);
//   return aux;
// }

// function timer(mil) {
//   let min = parseInt(mil / 60000);
//   mil -= min * 60000;
//   let sec = parseInt(mil / 1000);
// //mil -= sec * 1000;
//   return getTime(min, sec);
// }

// function getTime(...hms) {
//   hms.forEach((v, i) => {
//     hms[i] = (v < 10) ? `0${v}` : v;
//   });
//   return hms.join(':');
// }

// function interval(to) {
//   return setInterval(() => {
//     time.innerText = timer(left(to));
//   }, 50);
// }

// function onOff(k) {
//   btns[k].disabled = !(btns[k].disabled);
//   icon[k].classList.toggle("fa-spinner");
//   icon[k].classList.toggle("fa-pulse");
//   time.classList.remove("red");
// }

// function toggle(i, j) {
//   onOff(i);
//   if (btns[j].disabled) onOff(j);
// }

const timer = document.querySelector('#timer');
const buttons = document.querySelectorAll('button');
const alarm = new Audio('pmd/diamond.mp3');
let pomodoro;

buttons.forEach((btn, i) => {
  const ico = btn.querySelector('i');
  btn.addEventListener('click', () => {
    timer.classList.remove('red');
    clearInterval(pomodoro);
    postMessage(i);
    btn.disabled = true;
    ico.classList.add('fa-spinner', 'fa-pulse');
    const now = until((() => {
      return (i) ? 5 : 25;
    })());
    pomodoro = setInterval(() => {
      timer.innerText = convert(remainingTo(now));
    }, 50);
  });
});

window.onmessage = (msg) => {
  if (msg.data === '') {
    clearInterval(pomodoro);
    timer.classList.add('red');
    alarm.play();
  }
  buttons.forEach((btn, i) => {
    if (i !== msg.data) {
      btn.querySelector('i').classList.remove('fa-spinner', 'fa-pulse');
      btn.disabled = false;
    }
  });
}

function until(t) {
  return t * 60000 + Date.now();
}

function remainingTo(t) {
  const left = t - Date.now();
  if (left < 1000) postMessage('');
  return left;
}

function convert(mil) {
  let min = parseInt(mil / 60000);
  mil -= min * 60000;
  let sec = parseInt(mil / 1000);
//mil -= sec * 1000;
  return getTime(min, sec);
}

function getTime(...hms) {
  hms.forEach((v, i) => {
    hms[i] = (v < 10) ? `0${v}` : v;
  });
  return hms.join(':');
}
