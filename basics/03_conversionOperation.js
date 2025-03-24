let score=null

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score); //score get converted into number

console.log(typeof(valueInNumber));
console.log(valueInNumber);

/*
if score ="33" then by operation mention above will convert it into number.
if score ="33abc" then,it will convert into type number but it will be NaN (not a number).
if score = null its type will be object and after conversion, will give 0.
if score = undefined then its type will be undefined and after conversion it will give 0.
in case of boolean true->1 false->0.
in case of string (pure abcd..) -> number conversion -> give NaN.
*/

//type of NaN is Number

let isLoggedIn = 0

let booleanIsLoggedIn=Boolean(isLoggedIn) // non zero number => true // zero as => false
console.log(booleanIsLoggedIn);
/*
if isLoggedIn="" -> after conv-> false
if isLoggedIn="ram" -> after conv -> true
*/

let someNumber=33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber) //string