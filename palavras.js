const formEl = document.querySelector('form');
const input_ = formEl.querySelector('input');
const button = formEl.querySelectorAll('button');
const output = document.querySelector('span.navbar-text');

const worker = new Worker('palavras-worker.js');
const alarme = new Audio('docs/alloy.mp3');
alarme.volume = 0.1;

const loader = document.querySelector('i.fa-spinner');
const toggle = ele => ele.hidden = (ele.hidden) ? ele.hidden = false : ele.hidden = true;

formEl.onsubmit = evt => evt.preventDefault();

button.forEach((btn, ind) => {
  btn.addEventListener('click', () => {
    let val = input_.value;
    toggle(loader);
    output.innerText = 'Buscando...';
    worker.onmessage = msg => {
      toggle(loader);
      alarme.play();
      output.innerText = msg.data;
    }
    worker.postMessage([val, ind]);
  });
});
