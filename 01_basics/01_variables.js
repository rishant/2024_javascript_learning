const accountId = 144553
let accountEmail = "rishant@google.com"
var accountPassword = "password"
accountCity = "Bangalore"
let accountStatus;

console.table([{accountId, accountEmail, accountPassword, accountCity, accountStatus}], ['accountId', 'accountEmail', 'accountPassword', 'accountCity', 'accountStatus'])

/*
 Construct variables are not allowed to reassign.
*/
 // accountId = 2
// console.log(accountId)

/* 
Prefer not to use var keyword.
because of issue in block scope and functional scope.
*/
accountEmail = "rg@rg.com"
accountPassword = "pass"
accountCity = "Jaipur"

console.table([{accountId, accountEmail, accountPassword, accountCity, accountStatus}], ['accountId', 'accountEmail', 'accountPassword', 'accountCity', 'accountStatus'])