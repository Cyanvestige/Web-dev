//Coding Challenge #3 from lecture 25
let dolphin1 = 96;
let dolphin2 = 108;
let dolphin3 = 89;

let koala1 = 88;
let koala2 = 91;
let koala3 = 110;

//1
let avgDolphins = (dolphin1 + dolphin2 + dolphin3) / 3;
let avgKoalas = (koala1 + koala2 + koala3) / 3;
console.log(`dolphins' average:${avgDolphins}`);
console.log(`koalas' average:${avgKoalas}`);
//2
if(avgDolphins > avgKoalas)
    console.log("dolphins win");
else if(avgKoalas > avgDolphins)
    console.log("koalas win");
else
    console.log("A draw!");

//BONUS 1&2
dolphin1 = 97;
dolphin2 = 112;
dolphin3 = 101;

koala1 = 109;
koala2 = 95;
koala3 = 106;

avgDolphins = (dolphin1 + dolphin2 + dolphin3) / 3;
avgKoalas = (koala1 + koala2 + koala3) / 3;

console.log(`dolphins' average:${avgDolphins}`);
console.log(`koalas' average:${avgKoalas}`);


if(avgDolphins > avgKoalas && avgDolphins >= 100)
    console.log("dolphins win");
else if(avgKoalas > avgDolphins && avgKoalas >= 100)
    console.log("koalas win");
else if(avgDolphins < 100 && avgKoalas < 100)
    console.log("No team wins");
else
    console.log("Both wins,a draw!");




