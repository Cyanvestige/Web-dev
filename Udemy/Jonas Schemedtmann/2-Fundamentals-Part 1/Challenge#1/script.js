//Coding Challenge #1 from lecture 16
let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;

let markBMI = markWeight / markHeight**2;
let johnBMI = johnWeight / johnHeight**2;

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI + " " + johnBMI + " " + markHigherBMI);

markHeight = 1.88;
markWeight = 95;
johnHeight = 1.76;
markWeight = 85;

markBMI = markWeight / markHeight**2;
johnBMI = johnWeight / johnHeight**2;

markHigherBMI = markBMI > johnBMI;

console.log(markBMI + " " + johnBMI + " " + markHigherBMI);
