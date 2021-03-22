//Coding Challenge #1 from lecture 62
/*to do this:
    1.declare the arrays
    2.declare a function that take an array as the argument
    3.use loop to print the content the question requires
*/
let data1 = [17,21,23];
let data2 = [12,5,-5,0,4];

let printForecast = function(arr){
    let str = ''
    for(let i = 0;i < arr.length;i++){
        str+=`... ${arr[i]}°C in ${i+1} days `;
    }
    return str;
}

console.log(printForecast(data1));
console.log(printForecast(data2));

