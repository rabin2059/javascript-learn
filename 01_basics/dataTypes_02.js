"use strict"; // treat all JS code as newer version

// alert("hello") // we are using nodejs, not browser

console.log(3 + 3); console.log("TEST") // try to write in diff line for more readability

// consider tc39.es and MDN as your best friend for JS documentation and learning

let name = "John"
let age = 30
let isLoggedIn = false
let state;

// number => 2 to power 53 - 1
// bigint
// string => " ", ' ', ` `
// boolean => true, false
// null => standalone value that represents nothing
// undefined => variable that is declared but not assigned a value
// symbol => unique and immutable data type
// object => collection of properties and methods

console.log(typeof null); // this is a bug in JS, it should return null but it returns object
