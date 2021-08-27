const button = document.querySelectorAll('button');
const inpute = document.querySelector('input');
const result = document.querySelector('.navbar-text');
const worker = new Worker('palavras-worker.js');

button.forEach((btn, ind) => {
  btn.addEventListener('click', () => {
    let val = inpute.value;
    result.innerText = val;
    // worker.onmessage(ide);
  });
});
