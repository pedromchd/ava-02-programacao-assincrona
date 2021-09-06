const formEl = document.forms[0];
const input_ = formEl.querySelector('input');
const button = formEl.querySelectorAll('button');
const output = document.querySelector('output');
const spntxt = document.querySelector('span.navbar-text');

const finder = new Worker('palavras-finder.js');
const alarme = new Audio('docs/alloy.mp3');
alarme.volume = 0.1;

const loader = document.createElement('i');
loader.classList.add('fa', 'fa-spinner', 'fa-pulse');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const val = input_.value.toLowerCase().replaceAll(' ', '');
  if (!val) return;
  let ind;
  const btn = e.submitter;
  button.forEach((b, i) => { if (b === btn) ind = i; });
  spntxt.innerText = ' Buscando...';
  spntxt.prepend(loader);
  finder.postMessage([val, ind]);
});

finder.onmessage = msg => {
  alarme.play();
  spntxt.innerHTML = `Encontrados ${msg.data.length} resultados para "${input_.value.trim()}"`;
  output.innerHTML = msg.data.join(', ');
}
