const timer = document.querySelector("#timer");
const btn = document.querySelectorAll('button');

function counter() {
  const count = 25;
  return count * 60 * 1000;
}

// function onOff(button) {
//   button.disabled = !(button.disabled);
//   const ico = button.querySelector("i");
//   ico.classList.toggle("fa-spinner");
//   ico.classList.toggle("fa-pulse");
//   // return button.disabled;
// }

btn[0].addEventListener('click', () => {
  // onOff(btn[0]);
  const count2 = (() => {
    const now = Date.now();
    const mili = counter();
    return now + mili;
  })();
  const worker = new Worker('worker-pomodoro.js');
  worker.onmessage = (msg) => {
    timer.innerText = msg.data;
  }
  worker.postMessage(count2);
  btn[1].addEventListener('click', () => {
    worker.terminate();
    // onOff(btn[0]);
  });
});
