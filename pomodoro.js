// const H = (new Date()).getHours();
// console.log(H);

// const M = (new Date()).getMinutes();
// console.log(M);

// const S = (new Date()).getSeconds();
// console.log(S);

// const T = `${H}:${M}:${S}`;
// console.log(T);

// console.log(Date.now());

// const startT = Date.now();
// console.log(startT);
// const pomodoro = 25;
// const pomodoroM = pomodoro * 60 * 1000;
// console.log(pomodoroM);
// const stopT = startT + pomodoroM;
// console.log(stopT);
// const time = stopT - startT;
// console.log(time);
// const updateT = pomodoroM - time;
// console.log(updateT);

// LÓGICA => pra nao esquecer kek
/*
to progamando um timer, tipo aquele que a gente comprou da aliexpress (avaliação que o prof passou, F)
1. seguinte, quando a pessoa starta o timer, preciso guardar os milissegundos de quando ela deu o start
2. depois eu preciso guardar a soma desse start com o tempo do timer regressivo
3. então depois eu preciso ficar atualizando a diferença entre o tempo somado e o tempo atual, 4. e converter pra min
então fica marromeno assim
hehehe funfou
*/

// 19.681533333333334 - 19;
//    0.6815333333333342;
// 0.6815333333333342 * 60;
//    40.89200000000005;
// 40.89200000000005 - 40;
//    0.8920000000000528;
// 0.8920000000000528 * 1000;
//    892.0000000000528;
// Math.round(892.0000000000528);
//    892;

const pomodoro = Date.now(); // 1
console.log(pomodoro);
const min2mili = 25 * 60 * 1000; // 1500000 (25 min pra milisec)
console.log(min2mili);
const limite = pomodoro + min2mili; // 2
console.log(limite);
let restante = limite - Date.now(); // 3
console.log(restante);

let time = restante / 1000 / 60; // 4
// let time = 19.681533333333334; // caso de teste ==> funciona!!
console.log(time);

let minute = parseInt(time);
console.log(minute);

time -= minute;
console.log(time);
time *= 60
console.log(time);

let second = parseInt(time);
console.log(second);

time -= second;
time *= 1000;
console.log(time);

let milisec = parseInt(time);
console.log(milisec);

let hour = `${minute}:${second}:${milisec}`;
console.log(hour);

// vou commitar isso só pq vou deixar essa lógica salva, mto bom amei
