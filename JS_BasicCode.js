//primitive
let msg = 'hello';
console.log(msg);

//dynamic typing
let firstName = 'Steven';
console.log(typeof firstName);
firstName = 10;
console.log(typeof firstName);
firstName = true;
console.log(typeof firstName);

//object
let course = {
    name: 'JavaScript for Beginners',
    hours: 3
};
console.log(course.hours);

console.log(course.name);
course.name = 'JavaScriptFundamentals';
console.log(course.name);

//array
let productColors = ['blue', 'green'];
console.log(productColors[0]);
productColors[0] = 42;

console.log(productColors.length);

//functions
function sayHi() {
    console.log('hello');
}
sayHi();

function sayHi(name) {
    console.log('hello' + name);
}
sayHi('steven');

function multiply(numl, num2) {
    return numl * num2;
}
console.log(multiply(2, 2));

//operators
let num = 5;
console.log(multiply(num, 2));


let numl = 14;
let num2 = 10;
const isNum1GreaterOrEqualTo = numl > num2;
console.log(isNum1GreaterOrEqualTo);

let a = 2;
let b = '2';
//loos equality
console.log(a == b); // true
//strict equality
console.log(a === b); // false

//ternary operator
let age = 16;
const canDrive = age >= 16 ? 'can' : 'false';
console.log(canDrive);

//logical operator
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

let hasReservation = true;
let acceptingWalkIns = false;
const hasAccessToTable = hasReservation || acceptingWalkIns;
console.log(hasAccessToTable);

//falsy
console.log(false || 1); //1
console.log(false && 1); //false
console.log(2 && 1); // 1

 //  ---control flow---
//if-else
let priceOfChocotate = 6.99;
let hasAmountInCash = 3.99;
const canBuyChocotate = hasAmountInCash >= priceOfChocotate;
if (canBuyChocotate) {
    console.log('Enjoy your purchase')
} else {
    console.log('sorry, you dont have enough');
}

let hour = 15;
if (hour > 6 && hour < 12) {
    console.log('Serving breakfast ');
}
else if (hour > 12 && hour < 14) {
    console.log('Serving lunch');
}
else {
    console.log('Serving dinner');
}

//switch-case
