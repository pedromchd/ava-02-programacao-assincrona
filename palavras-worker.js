onmessage = msg => {
  let val = msg.data[0];
  let ind = msg.data[1];
  setTimeout(() => {
    postMessage(val);
  }, 2000);
  // let txt = (ind) ? formedBy(val) : hasThe(val);
  // postMessage(txt);
};

// function getDataBase() {

// }

// function formedBy() {}
// function hasThe() {}
