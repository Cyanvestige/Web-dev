//Coding Challenge #2 from lecture 41
'use strict';
//1
let calcTip = bill => {return (bill>=50 && bill <= 300)?bill*0.15:bill*0.2};
let bill = 275;
let tip = calcTip(100);

//2
let bills = [125,555,44];
console.log(bills);

//3
let tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(tips);

//BONUS
let total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(total);





