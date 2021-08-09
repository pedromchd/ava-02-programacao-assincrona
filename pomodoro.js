// const tim = document.querySelector("#timer");
// const btn = document.querySelectorAll('button');

// function counter() {
//   const count = 25;
//   return count * 60 * 1000;
// }

// // function onOff(button) {
// //   button.disabled = !(button.disabled);
// //   const ico = button.querySelector("i");
// //   ico.classList.toggle("fa-spinner");
// //   ico.classList.toggle("fa-pulse");
// //   // return button.disabled;
// // }

// btn[0].addEventListener('click', () => {
//   // onOff(btn[0]);
//   const count2 = (() => {
//     const now = Date.now();
//     const mili = counter();
//     return now + mili;
//   })();
//   const worker = new Worker('worker-pomodoro.js');
//   worker.onmessage = (msg) => {
//     tim.innerText = timer(left(msg.data));
//   }
//   worker.postMessage(count2);
//   btn[1].addEventListener('click', () => {
//     worker.terminate();
//     // onOff(btn[0]);
//   });
// });

// function left(time) {
//   return time - Date.now();
// }

// function timer(left) {
//   let min = parseInt(left / 1000 / 60);
//   left -= min * 60 * 1000;
//   let sec = parseInt(left / 1000);
//   sec = sec < 10 ? `0${sec}` : sec;
//   // left -= sec * 1000;
//   return `${min}:${sec}`;
// }

// onmessage = (msg) => {
//   setInterval(() => postMessage(msg.data), 10);
// };

const qSel = document.querySelectorAll.bind(document);
const time = qSel("#timer")[0];
const btn1 = qSel("button")[0];
const btn2 = qSel("button")[1];
let timer;

btn1.addEventListener('click', () => {
  const count = count2(25);
  timer = setInterval(() => {
    const now = counter(left(count));
    time.innerText = now;
  }, 50);
});

btn2.addEventListener('click', () => {
  clearInterval(timer);
});

function count2(t) {
  t *= 60000;
  return Date.now() + t;
}

function left(to) {
  return to - Date.now();
}

function counter(mil) {
  const min = parseInt(mil / 60000);
  mil -= min * 60000;
  let sec = parseInt(mil / 1000);
//mil -= sec * 1000;
  sec = (sec < 10) ? `0${sec}` : sec;
  return `${min}:${sec}`;
}
