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
  value = permute(value);
  for (const w of words) {
    if (value.indexOf(w.toLowerCase()) !== -1) found.push(w);
  }
  return found;
}

function permute(str) {
  if (str.length < 2) {
    return str;
  }
  const permutation = Array();
  for (let i in str) {
    const char = str[i];
    if (str.indexOf(char) != i) continue;
    const rest = str.slice(0, i) + str.slice(++i);
    for (const perm of permute(rest)) {
      permutation.push(char + perm);
    }
  }
  return permutation;
}
