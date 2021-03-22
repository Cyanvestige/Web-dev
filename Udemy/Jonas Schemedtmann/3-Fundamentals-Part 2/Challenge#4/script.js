//Coding Challenge #4 from lecture 50
'use strict';
//1
let bills = [22,295,176,440,37,105,10,1100,86,52];

//2
let tips = [];
let total = [];

//3
let calcTip = bill => {return (bill>=50 && bill <= 300)?bill*0.15:bill*0.2};
for(let i = 0;i < bills.length;i++){
    tips.push(calcTip(bills[i]));
    total.push(bills[i] + tips[i]); 
}

//BONUS
let calcAverage = arr =>{
    let sum = 0;
    for(let i = 0;i < arr.length;i++){
        sum += arr[i];
    }
    return sum / arr.length
}

//print arrays
console.log(bills);
console.log(tips);
console.log(total);

//print the average of arrays
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(total));

