const accountId = 199882
let accountEmail = "test@gmail.com"
var accountPassword = "12345"
accountCity = "Udayapur"
let accountState;

// accountId = 2 // const is not allowed to change

accountEmail = "test100@gmail.com"
accountPassword = "1212121212"
accountCity = "Gaighat"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])