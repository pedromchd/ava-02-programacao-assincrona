// const pomodoro = Date.now();
// const min2mili = 25 * 60 * 1000;
// const limite = pomodoro + min2mili;
// let restante = limite - Date.now();
// // let time = 19.681533333333334; // caso de teste ==> funciona!!
// let time = restante / 1000 / 60; // 4
// let minute = parseInt(time);
// time -= minute;
// time *= 60
// let second = parseInt(time);
// time -= second;
// time *= 1000;
// let milisec = parseInt(time);
// let hour = `${minute}:${second}:${milisec}`;

function pomodoro() {
  if (() => Boolean(promtp())) {
    const pomodor = Date.now();
    const min2mili = 25 * 60 * 1000;
    const limite = pomodor + min2mili;
    return limite;
  }
}

function timee(limite) {
  let restante = limite - Date.now();
  let time = restante / 1000 / 60;
  return time;
}

function counting(time) {
  let minute = parseInt(time);
  time -= minute;
  time *= 60
  let second = parseInt(time);
  time -= second;
  time *= 1000;
  let milisec = parseInt(time);
  let hour = `${minute}:${second}:${milisec}`;
  return hour;
}


let time = pomodoro();
setInterval(() => console.log(counting(timee(time))), 300);
