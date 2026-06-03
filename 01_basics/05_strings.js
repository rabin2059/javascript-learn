const name = "Rabin Rai"
const repoCount = 10

// console.log(name + repoCount + " Value");

console.log(`My name is ${name} and I have ${repoCount} repositories`);

const gameName = new String("Chess-Master")

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("e"));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-10, 5)
console.log(anotherString);

const newString1 = "    running   "
console.log(newString1.trim());

const url = "https://ancd.com/abc%20def"

console.log(url.replace('%20', '-'));

console.log(url.includes("abcdfa"));

console.log(gameName.split("-"));