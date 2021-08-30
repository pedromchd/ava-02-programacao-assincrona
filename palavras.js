const formEl = document.querySelector('form');
const input_ = document.querySelector('input');
const output = document.querySelector('output');
const button = document.querySelectorAll('button');

const finder = new Worker('palavras-finder.js');
const alarme = new Audio('docs/alloy.mp3');
alarme.volume = 0.1;

const loader = document.createElement('i');
loader.classList.add('fa', 'fa-spinner', 'fa-pulse');

formEl.onsubmit = e => e.preventDefault();

button.forEach((btn, ind) => {
  btn.addEventListener('click', () => {
    const val = input_.value.trim().toLowerCase();
    try {
      search(val);
      finder.postMessage([val, ind]);
    }
    catch (e) {
      input_.placeholder = e;
    }
  });
});

finder.onmessage = msg => {
  alarme.play();
  output.innerText = msg.data;
}

function search(v) {
  if (v === '') {
    input_.value = '';
    throw 'Insira ao menos um caractere para inciar a busca';
  } else {
    input_.placeholder = 'Insira letras para iniciar a busca';
    output.innerText = ' Buscando...';
    output.prepend(loader);
  }
}
