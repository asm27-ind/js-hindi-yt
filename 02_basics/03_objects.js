// way to define objects : as a literal (not singleton)
//:as a constructor (singleton banata hai)
// Singleton
// Object.create

// Object literals

/* How to take symbol as a key for an object ? */
const sym = Symbol("key1")
const JsUser ={
    name:"Hitesh",
    "full name": "TM. Hitesh", //can't access it with dot operetor becoz of spacing in key name if key name is written without spacing then we can access it.
    age: 18,
    [sym]:"my key 1", // symbol as key
    location: "Jaipur",
    email:"ansh88@gmail.com",
    isLoggedIn: false,
    lastLoginDay:["monday","tuesday"]
}
// system intreprate    name:"Hitesh"  as "name":"Hitesh"
// console.log(JsUser.email)
// console.log(JsUser["full name"])
// //console.log(JsUser[email]) // not work bcoz key is considered as string
// console.log(JsUser["email"]) // Now it will work
// console.log(JsUser[sym]); // symbol as key

JsUser.email="jsgd@gmail.com" // to change value

// locking information
//Object.freeze(JsUser) // now no further changes will be reflected in your object.
//JsUser.email="rameshwar@gmail.com"
// console.log(JsUser);

// how to add fn ?
JsUser.greeting = function(){
    console.log("hello js User");
}

// console.log(JsUser.greeting); // [Function (anonymous)]
// console.log(JsUser.greeting()); // hello js User
// /*
// console.log(JsUser.greeting); → prints the function reference, not its execution.

// JsUser.greeting(); → executes the function, printing "hello js User".

// This is a way to define methods inside objects, which is common in object-oriented JavaScript.
// */
JsUser.greetingTwo = function(){
    console.log(`hello js users, ${this.name}`);
}
console.log(JsUser.greetingTwo())
console.log(JsUser.greetingTwo)

