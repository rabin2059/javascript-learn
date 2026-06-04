let today = new Date()
// console.log(today.toString());
// console.log(today.toDateString());
// console.log(today.toISOString());
// console.log(today.toLocaleDateString());
// console.log(today.toLocaleString());
// console.log(today.toTimeString());
// console.log(today.toUTCString());
// console.log(typeof today);

// let myGeneratedDate = new Date(2003, 3, 7)
// let myGeneratedDate = new Date(2003, 3, 7, 5, 4)
let myGeneratedDate = new Date("2023-05-12")
// console.log(myGeneratedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myGeneratedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "UTC"
})