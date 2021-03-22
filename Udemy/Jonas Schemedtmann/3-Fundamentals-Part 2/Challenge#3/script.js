//Coding Challenge #3 from lecture 45
'use strict';
//1
let markProperties = {
    fullName: "Mark Miller",
    mass: 78,
    height :1.69,
    calcBMI:function(){
        this.BMI = this.mass / this.height**2;
        return this.BMI;
    }
};

let johnProperties ={
    fullName: "John Smith",
    mass: 92,
    height :1.95,
    calcBMI:function(){
        this.BMI = this.mass / this.height**2;
        return this.BMI;
    }
}
markProperties.calcBMI();
johnProperties.calcBMI();

console.log(markProperties.BMI > johnProperties.BMI?`${markProperties.fullName}'BMI(${markProperties.BMI}) is higher than ${johnProperties.fullname}'s(${johnProperties.BMI})!`:
            `${johnProperties.fullName}'BMI(${johnProperties.BMI}) is higher than ${markProperties.fullname}'s(${markProperties.BMI})!`);
