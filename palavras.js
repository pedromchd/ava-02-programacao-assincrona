const formEl = document.querySelector('form');
const input_ = formEl.querySelector('input');
const button = formEl.querySelectorAll('button');
const output = document.querySelector('span.navbar-text');

const worker = new Worker('palavras-worker.js');

formEl.onsubmit = evt => evt.preventDefault();

button.forEach((btn, ind) => {
  btn.addEventListener('click', () => {
    let val = input_.value;
    output.innerText = 'Buscando...';
    worker.onmessage = msg => {
      output.innerText = msg.data;
    }
    worker.postMessage([val, ind]);
  });
});
