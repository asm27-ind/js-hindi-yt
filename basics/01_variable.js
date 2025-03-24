const accountId=144553
let accountEmail="asm8839@gmail.com"
var accountPassword="12345678"

accountCity="jaipur" //this way of defining is wrong but you can, by this. 

let accountState; //undefined

// accountId=3  // not allowed

accountEmail="pqr@gmail.com"
accountPassword="12348"
accountCity="vijayanagar"

console.log(accountId)

/*
pref not to use var , because of issue in block scope and fnal scope.
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])