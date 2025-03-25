let score = null;

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score); //score get converted into number

// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

/*
if score ="33" then by operation mention above will convert it into number.
if score ="33abc" then,it will convert into type number but it will be NaN (not a number).
if score = null its type will be object and after conversion, will give 0.
if score = undefined then its type will be undefined and after conversion it will give 0.
in case of boolean true->1 false->0.
in case of string (pure abcd..) -> number conversion -> give NaN.
*/

//type of NaN is Number

let isLoggedIn = 0;

let booleanIsLoggedIn = Boolean(isLoggedIn); // non zero number => true // zero as => false
// console.log(booleanIsLoggedIn);
/*
if isLoggedIn="" -> after conv-> false
if isLoggedIn="ram" -> after conv -> true
*/

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber)
// console.log(typeof stringNumber) //string

// ********************** Operations *************************

let value = 3;
let negvalue = -value;
//console.log(negvalue); //-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // power
// console.log(2/2);
// console.log(2%3); // remainder

let str1 = "hello";
let str2 = " anshul";

let str3 = str1 + str2
// console.log(str3);

// console.log("1"+2) //12
// console.log(1+"2") //12
// console.log("1"+2+2) //122
// console.log(1+2+"2") //32


//console.log(true)//true

/* on writting + in starting -> conversion into integer form*/

console.log(+true)// 1
//console.log(true+)// not possible --> Error!!!
console.log(+""); // 0


let num1,num2,num3

num1=num2=num3=2+2

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

/* prefix postfix -> read it ++a a++ */

//link to study
//https://262.ecma-international.org/#sec-abstract-operations


/*                      Memory                           */

// stack // heap

// we are using premitive data types so stack memory will be used via pass by value concept
let myname="anshul"
let yourname= myname
console.log(yourname)
yourname="ram"
console.log(yourname) // pass by value
console.log(myname) // no changes in original one

// we are using non-premitive so here heap memory will be used via pass by reference

let users={
    email:"asm@gmail.com",
    number:"+91257895",
}

let anotheruser=users;
console.log(users)
anotheruser.email="asm234@gmail.com"

console.log(anotheruser)
console.log(users) // changes incoperated in both objects i.e known as pass by reference


