//Coding Challenge #1 from lecture 38
'use strict';
//DATA1
let dolphin1 = 44;
let dolphin2 = 23;
let dolphin3 = 71;

let koala1 = 65;
let koala2 = 54;
let koala3 = 49;

//1
let calcAverage = (var1,var2,var3) => {return (var1 + var2 + var3) / 3};

//2
let avgDolphins = calcAverage(dolphin1,dolphin2,dolphin3);
let avgKoalas = calcAverage(koala1,koala2,koala3);

//3
function checkWinner(avgDolphins,avgKoalas){
    if(avgDolphins > 2 * avgKoalas){
        console.log(`Dolphins win(${avgDolphins} v. ${avgKoalas})`);
    }
    else if(avgKoalas > 2 * avgDolphins){
        console.log(`Koalas win(${avgKoalas} v. ${avgDolphins})`);
    }
    else{
        console.log(`No team wins(${avgKoalas} v. ${avgDolphins})`);
    }
}

//4
checkWinner(avgDolphins,avgKoalas);

//DATA2
dolphin1 = 85;
dolphin2 = 54;
dolphin3 = 71;

koala1 = 23;
koala2 = 34;
koala3 = 27;

avgDolphins = (dolphin1 + dolphin2 + dolphin3) / 3;
avgKoalas = (koala1 + koala2 + koala3) / 3;

checkWinner(avgDolphins,avgKoalas);







