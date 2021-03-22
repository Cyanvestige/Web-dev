//Coding Challenge #2 from lecture 19
let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;
let higherOne;
let lowerOne;
let markBMI = markWeight / markHeight**2;
let johnBMI = johnWeight / johnHeight**2;

let markHigherBMI = markBMI > johnBMI;

if(markHigherBMI){
    higherOne = 'Mark';
    lowerOne = 'John';
}
else{
    higherOne = 'John';
    lowerOne = 'Mark';
}
console.log(`${higherOne}'s BMI is higher than ${lowerOne}'s!`);

markHeight = 1.88;
markWeight = 95;
johnHeight = 1.76;
markWeight = 85;

markBMI = markWeight / markHeight**2;
johnBMI = johnWeight / johnHeight**2;

markHigherBMI = markBMI > johnBMI;

if(markHigherBMI){
    higherOne = 'Mark';
    lowerOne = 'John';
}
else{
    higherOne = 'John';
    lowerOne = 'Mark';
}
console.log(`${higherOne}'s BMI is higher than ${lowerOne}'s!`);
