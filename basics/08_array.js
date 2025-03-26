//  array

//  const myArr=[0,1,2,3,4,5,true,"hitesh"]
 const myArr=[0,1,2,3,4,5]
 //copy operation in array creates shallow copy(A shallow copy of an object is a copy whose properties share the same references
 //  (point to the same underlying values) as those of the source object from which the copy was made.
 //  As a result, when you change either the source or the copy, you may also cause the other object to change too. 
 //That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.)

 const myArr2 = new Array(1,2,3,4)
//  console.log(myArr[0])
 
 
 // Array methods
 
 myArr.push(6)
 myArr.push(7)
 myArr.pop()

//  myArr.unshift(0) //add 0 at start by shifting each value to the right so, 
//  // if i/p size is large then using unshift operation we will increase load on on system 
//  myArr.unshift(9) //add 9 at start
//  myArr.shift() // remove first starting element from array here it will remove 9.
//  console.log(myArr.includes(5)) // -1 if not exist
//  console.log(myArr.indexOf(4)); // from left to nearest one in case of duplicacy

// const newarr=myArr.join()
 
//  console.log(myArr)
//  console.log(newarr)
//  console.log(typeof newarr) //string


 /*

 In Array :-
 let allows modification & reassignment.

const allows modification but no reassignment.

let myArr = [1, 2, 3];

myArr.push(4); // ✅ Allowed
console.log(myArr); // [1, 2, 3, 4]

myArr = [10, 20]; // ✅ Allowed (Unlike `const`, we can reassign)
console.log(myArr); // [10, 20]
 
 */

//slice splice

console.log("A ",myArr)
const myn1 = myArr.slice(1,3) //just store index 1,2 in myn1 // don't manipulate original array

console.log(myn1)
console.log("B ",myArr)

const myn2 = myArr.splice(1,3) // not just store index 1,2,3 in myn2.
// but also remove them from main array in which we applied that operation.
// manipulate original array

console.log("c ",myArr)
console.log(myn2)