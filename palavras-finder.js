onmessage = async msg => {
  const val = msg.data[0];
  const ind = msg.data[1];
  const raw = await fetch('docs/palavras.txt');
  const txt = await raw.text();
  const get = txt.split(/\r\n/);
  const res = (ind) ? formedBy(val, get) : hasThe(val, get);
  postMessage(res);
};

//sistema de contagem

function hasThe(value, words) {
  const found = Array();
  words.forEach(w => {
    try {
      value.split('').forEach(l => {
        if (w.toLowerCase().indexOf(l) < 0) throw 'aaa';
      });
      found.push(w);
    }
    catch (e) {
      console.log(e);
    }
  });
  return found.join(', ');
}

function formedBy(value, words) {
  return words[1];
}
