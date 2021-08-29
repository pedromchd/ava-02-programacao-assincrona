const formEl = document.querySelector('form');
const input_ = document.querySelector('input');
const output = document.querySelector('output');
const button = document.querySelectorAll('button');

const finder = new Worker('palavras-finder.js');
const alarme = new Audio('docs/alloy.mp3');
alarme.volume = 0.1;

// tratar o ícone de carregamento
const loader = document.querySelector('i.fa-spinner');
const toggle = i => i.hidden = (i.hidden) ? i.hidden = false : i.hidden = true;

formEl.onsubmit = e => e.preventDefault();

button.forEach((btn, ind) => {
  btn.addEventListener('click', () => {
    input_.placeholder = 'Insira letras para começar a buscar';
    try {
      let val = input_.value.trim().toLowerCase();
      if (val === '') throw 'Insira ao menos um caractere para inciar a busca';
      toggle(loader);
      output.innerText = 'Buscando...';
      finder.postMessage([val, ind]);
    }
    catch (e) {
      input_.value = '';
      input_.placeholder = e;
    }
  });
});

finder.onmessage = msg => {
  toggle(loader);
  alarme.play();
  output.innerText = msg.data;
}
