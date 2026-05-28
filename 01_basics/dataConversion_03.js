let score = null

// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "23" => 23
// "23aff" => NaN
//  true => 1; false => 0

let isLoggedIn = 6

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false
// "asdf" => true

let someNumber = 32

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ********************** Operations **********************

let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "hello"
let str2 = " world"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log(1 + 2 + "3");
// console.log("1" + (2 + 3));

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 3
// console.log(num1, num2, num3);

let gameScore = 100
gameScore++; // postfix
++gameScore; // prefix 
console.log(gameScore);
