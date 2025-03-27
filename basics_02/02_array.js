const marvel_heros = ["thor","Ironman","spiderman"]
const dc_hero = ["superman","flash","batman"]

//marvel_heros.push(dc_hero) // array within array // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// Concat fn

const new_hero = marvel_heros.concat(dc_hero) //concat return new array

// console.log(new_hero); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Spread operator

const all_new_heros=[...marvel_heros, ...dc_hero]
// console.log(all_new_heros)

// flat fn

//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) // [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]
// const real_another_array = another_array.flat(1) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
// console.log(real_another_array);

/* Array.isArray(i/p)*/
/* Array.from(i/p)*/

console.log(Array.isArray("hitesh")) // false
console.log(Array.from("hitesh")) // convert input into array // [ 'h', 'i', 't', 'e', 's', 'h' ]
// /* Interesting case */
// console.log(Array.from({name:"Anshul",class:2023})) //[]

/*

✅ How to Convert an Object to an Array?
1️⃣ Convert Object Keys to an Array
Use Object.keys() to get an array of the object's keys.

js
Copy
Edit
const obj = { name: "Anshul", class: 2023 };
const keysArray = Object.keys(obj);

console.log(keysArray); // Output: ['name', 'class']
2️⃣ Convert Object Values to an Array
Use Object.values() to extract only the values.

js
Copy
Edit
const valuesArray = Object.values(obj);

console.log(valuesArray); // Output: ['Anshul', 2023]
3️⃣ Convert Object Entries to an Array
Use Object.entries() to get key-value pairs as nested arrays.

js
Copy
Edit
const entriesArray = Object.entries(obj);

console.log(entriesArray); // Output: [['name', 'Anshul'], ['class', 2023]]
🔥 Using Array.from() Properly
If you want to use Array.from(), you can do:

js
Copy
Edit
const arrFromKeys = Array.from(Object.keys(obj));
console.log(arrFromKeys); // ['name', 'class']

const arrFromValues = Array.from(Object.values(obj));
console.log(arrFromValues); // ['Anshul', 2023]
📌 Summary:

Array.from({}) doesn't work because plain objects aren't iterable.

Use Object.keys(), Object.values(), or Object.entries() instead! 🚀
*/

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3)) //Returns a new array from a set of elements.
//[ 100, 200, 300 ]