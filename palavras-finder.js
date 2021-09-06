onmessage = async msg => {
  const raw = await fetch('docs/palavras.txt');
  const txt = await raw.text();
  const get = txt.split(/\r\n/);
  const val = msg.data[0];
  const ind = msg.data[1];
  const res = (ind) ? formedBy(val, get) : hasThe(val, get);
  postMessage(res);
};

function hasThe(value, words) {
  const found = Array();
  for (const w of words) {
    let aux = true;
    for (const l of value) {
      if (w.toLowerCase().indexOf(l) < 0) aux = false;
    }
    if (aux) found.push(w);
  }
  return found;
}

function formedBy(value, words) {
  const found = Array();
  for (const w of words) {
    if (w.length !== value.length) continue;
    let tmp = w.toLowerCase();
    let aux = true;
    for (const l of value) {
      if (tmp.indexOf(l) < 0) aux = false;
      else tmp = tmp.replace(l, '*');
    }
    if (aux) found.push(w);
  }
  return found;
}
