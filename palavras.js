const formEl = document.forms[0];
const input_ = formEl.search;
const output = document.querySelector('output');
const spntxt = document.querySelector('span.navbar-text');

const finder = new Worker('palavras-finder.js');
const alarme = new Audio('docs/alloy.mp3');
alarme.volume = 0.1;

const loader = document.createElement('i');
loader.classList.add('fa', 'fa-spinner', 'fa-pulse');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const ind = Number(e.submitter.value);
  const val = input_.value.toLowerCase().replaceAll(' ', '');
  if (!val) return;
  spntxt.innerText = ' Buscando...';
  spntxt.prepend(loader);
  finder.postMessage([val, ind]);
});

formEl.addEventListener('reset', () => {
  spntxt.innerHTML = 'Você ainda não pesquisou nada!';
  output.innerHTML = "As palavras encontradas serão mostradas aqui.";
});

finder.onmessage = msg => {
  alarme.play();
  spntxt.innerHTML = `Encontrados ${msg.data.length} resultados para "${input_.value.trim()}"`;
  output.innerHTML = msg.data.join(', ');
}
