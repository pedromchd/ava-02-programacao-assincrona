const qSel = document.querySelectorAll.bind(document);
const time = qSel("#timer")[0];
const btn1 = qSel("button")[0];
const btn2 = qSel("button")[1];
let counter;

btn1.addEventListener('click', () => {
  clearInterval(counter);
  const count = count2(25);
  counter = interval(count);
});

btn2.addEventListener('click', () => {
  clearInterval(counter);
  const count = count2(5);
  counter = interval(count);
});

function count2(t) {
  return Date.now() + t * 60000;
}

function left(to) {
  return to - Date.now();
}

function timer(mil) {
  const min = parseInt(mil / 60000);
  mil -= min * 60000;
  let sec = parseInt(mil / 1000);
//mil -= sec * 1000;
  sec = (sec < 10) ? `0${sec}` : sec;
  return `${min}:${sec}`;
}

function interval(to) {
  return setInterval(() => {
    time.innerText = timer(left(to));
  }, 50);
}
