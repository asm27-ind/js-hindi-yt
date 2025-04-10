# js-hindi-yt
A code repo for learning Java Script
## **History of JavaScript**  
JavaScript (JS) was created by **Brendan Eich** in **1995** while he was working at Netscape Communications. It was originally called **Mocha**, then renamed **LiveScript**, and finally **JavaScript**.  

### **Key Milestones in JavaScript's History**  
1. **1995** – Brendan Eich develops JavaScript in **10 days** for Netscape Navigator 2.  
2. **1996** – Microsoft creates **JScript**, a variant of JavaScript, for Internet Explorer 3.  
3. **1997** – JavaScript becomes an official standard as **ECMAScript (ES1)** under **ECMA International**.  
4. **2009** – **ES5** introduces features like `JSON`, `strict mode`, and improved array methods.  
5. **2015** – **ES6 (ECMAScript 2015)** brings **let, const, arrow functions, classes, and promises**.  
6. **2017-Present** – Features like async/await, optional chaining, and new APIs improve JavaScript for modern applications.  

Today, JavaScript is the **most popular** programming language for web development, used both on the client-side and server-side (via Node.js).  

---

## **History of Search Engines**  
Search engines help users find web pages on the internet. They have evolved significantly since the early days of the web.  

### **Key Milestones in Search Engine History**  
1. **1990 – Archie:** The first search engine, **Archie**, indexed FTP files but did not provide text search.  
2. **1993 – ALIWEB:** The first web-based search engine, created by **Martijn Koster**.  
3. **1994 – Yahoo! Directory:** A manually curated directory rather than a true search engine.  
4. **1996 – Backrub (Google’s Prototype):** **Larry Page and Sergey Brin** developed **Backrub**, later renamed **Google**.  
5. **1998 – Google Launched:** Google introduced **PageRank**, revolutionizing web search.  
6. **2000 – Google AdWords:** The introduction of advertising in search results.  
7. **2004 – Web 2.0 & Personalization:** Search engines started personalizing search results.  
8. **2011 – Google Panda Update:** Improved search quality by penalizing low-quality websites.  
9. **2015 – Mobile-first Indexing:** Google started prioritizing mobile-friendly sites.  
10. **2023-Present – AI Search & Generative AI:** Search engines integrate AI (like **Google Gemini, Microsoft Copilot**) to provide more interactive search experiences.  

### **What is an API?**
API (Application Programming Interface) is a set of rules that allows one software application to interact with another. It defines how requests and responses should be made and processed.

In simple terms, an API acts as a **waiter** in a restaurant:
- You (the client) give your order (request) to the waiter (API).
- The waiter takes it to the kitchen (server).
- The kitchen prepares the food (processes the request).
- The waiter brings the food back to you (response).

---

### **Formats of API Responses**
APIs typically return data in **structured formats**. The most common ones are:
1. **JSON (JavaScript Object Notation) – Most widely used**
2. **XML (Extensible Markup Language) – Used in older systems**
3. **Plain Text or HTML – Sometimes used in web APIs**

---

### **Real-Life Example of an API**
#### **1. Weather API**
- You open a weather app and check today's temperature.
- The app sends a request to a weather API like OpenWeather.
- The API responds with the temperature in JSON format.
- The app displays the temperature to you.

#### **2. Online Payments (Paytm, Google Pay, UPI)**
- You make a payment using Google Pay.
- Google Pay’s API communicates with your bank’s API.
- Your bank processes the payment and returns a success or failure message.

---

### **What is JSON?**
JSON (JavaScript Object Notation) is a lightweight data format used for APIs. It is easy for humans to read and write, and easy for machines to parse.

#### **Example JSON Response from a Weather API**
```json
{
  "city": "Kolkata",
  "temperature": 32,
  "humidity": 65,
  "description": "Sunny"
}
```

---

### **Relationship Between APIs and JSON**
- APIs **send and receive data** in JSON format because it is lightweight and widely supported.
- JSON allows **structured** and **organized** data transfer.
- It is **language-independent**, meaning APIs in Python, JavaScript, or C++ can all use JSON.

# JavaScript Closures
In JavaScript, a closure is created when a function is defined within another function, allowing the inner function to access variables and parameters of the outer function even after the outer function has finished executing. This is because the inner function maintains a reference to its lexical environment, which includes all the variables in scope at the time of its creation

🚀 JavaScript Execution Model – Complete Interview Guide
🧠 1. What is an Execution Context?
An Execution Context (EC) is the environment where JavaScript code is evaluated and executed.

Think of it as a container with:

Variable Environment – stores variables, functions, parameters.

Lexical Environment – info about the surroundings of the code.

this Binding – depends on how the function is called.

✅ Types of Execution Contexts:
Type	Description
Global Execution Context	Created when the JS file starts executing. Only once.
Function Execution Context	Created every time a function is invoked.
Eval Execution Context	Created when code is executed inside eval() (rarely used)
🧾 2. Two Phases of Code Execution in JS
Each Execution Context goes through two phases:

🔹 1. Memory Creation Phase (a.k.a. Hoisting Phase)
Memory is allocated for variables and functions.

Variable declarations (var) are hoisted with undefined.

Function declarations are hoisted with their full definition.

👉 Example:

js
Copy
Edit
console.log(x); // undefined
console.log(greet()); // Hello

var x = 10;
function greet() {
  return "Hello";
}
Under the hood (Memory Phase):

js
Copy
Edit
x → undefined
greet → function() { return "Hello"; }
🔹 2. Execution Phase
Now JS executes the code line-by-line:

Assigns actual values to variables

Invokes functions

So x = 10 is updated, and greet() is executed.

🚨 Interview Tip: Hoisting Differences
Declaration Type	Hoisted?	Initialized?	Temporal Dead Zone?
var	Yes	undefined	No
let/const	Yes	❌ (Not initialized)	✅ Yes
Example:
js
Copy
Edit
console.log(a); // undefined
console.log(b); // ReferenceError
var a = 5;
let b = 10;
🔁 3. Call Stack – The Execution Tracker
JS uses a Call Stack (LIFO – Last In, First Out) to manage execution contexts.

Example:
js
Copy
Edit
function one() {
  console.log("One");
  two();
}

function two() {
  console.log("Two");
}

one();
Call Stack Flow:
vbnet
Copy
Edit
PUSH: Global()
PUSH: one()
PUSH: two()
POP: two()
POP: one()
POP: Global()
Each function call creates a new Function Execution Context that gets pushed to the stack, and removed once done.

🔍 4. Components of Execution Context
Each EC has:

✅ a) Variable Environment
Stores function arguments, var declarations, and function declarations.

✅ b) Lexical Environment
Reference to the parent EC (scope chain).

✅ c) this Binding
Global EC → this refers to global object (window in browser).

Inside functions → depends on how function is called (can be undefined, global object, or custom object).

📌 5. Execution Context vs Scope Chain vs Lexical Scope
Scope Chain – Chain of references to parent environments for resolving variables.

Lexical Scope – Based on where functions are written (not called).

👉 Example:

js
Copy
Edit
function outer() {
  let a = 10;
  function inner() {
    console.log(a); // uses outer’s variable via scope chain
  }
  inner();
}
outer();
📚 6. Bonus: Arrow Functions and this
Arrow functions don’t have their own this. They use this from the surrounding lexical context.

js
Copy
Edit
const obj = {
  name: "John",
  sayHi: () => {
    console.log(this.name); // undefined
  }
};

obj.sayHi(); // ⚠️ Not "John"
Use a normal function if you need dynamic this.

💬 Common Interview Questions
What is hoisting in JavaScript?

Explain how the call stack works.

What are the phases of execution in JS?

Difference between execution context and lexical environment?

Why do let and const throw ReferenceError before initialization?

What is the scope chain and how does it work with closures?

How does JavaScript handle function calls internally?

🧾 Summary Cheat Sheet
Concept	Description
Execution Context	Environment to run code
Global EC	Default context for any JS file
Function EC	Created when a function is invoked
Memory Phase	Variables/functions are hoisted
Execution Phase	Code is run line-by-line
Call Stack	Manages ECs (LIFO)
var vs let/const	var hoisted + initialized, let/const hoisted only
this in functions	Depends on invocation (use arrow functions cautiously)
Scope Chain	Used for variable resolution through nested scopes

📋 Top JavaScript Interview Questions & Answers (with Examples)
1. What is Hoisting in JavaScript?
Answer:
Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (script or function).

var is hoisted with undefined.

function declarations are hoisted with their entire function body.

let and const are hoisted but not initialized (Temporal Dead Zone).

Example:

js
Copy
Edit
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;
2. What is the difference between let, const, and var?
Feature	var	let	const
Scope	Function	Block	Block
Hoisting	Yes, undefined	Yes, but TDZ	Yes, but TDZ
Reassignable	Yes	Yes	❌
Redeclarable	Yes	❌	❌
3. What is an Execution Context?
Answer:
An Execution Context is the environment where JavaScript code runs.

Types:

Global Execution Context (GEC)

Function Execution Context (FEC)

Eval Execution Context (rare)

Each EC has:

Variable Environment

Lexical Environment

this binding

4. What is the Call Stack?
Answer:
The Call Stack is a stack data structure that keeps track of function calls. When a function is invoked, its context is pushed to the stack; once it finishes, it’s popped off.

5. What are Closures?
Answer:
A closure is a function that remembers its outer scope, even after the outer function has finished executing.

Example:

js
Copy
Edit
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
6. Difference between == and === in JavaScript?
Answer:

== checks for value equality with type coercion

=== checks for strict equality (value + type)

js
Copy
Edit
'5' == 5   // true
'5' === 5  // false
7. What is the difference between null and undefined?
Feature	undefined	null
Type	undefined	object
Meaning	Declared but not assigned	Intentionally empty
8. What is the difference between function declaration and function expression?
Function Declaration:

js
Copy
Edit
function greet() {
  return "Hello";
}
✅ Hoisted

Function Expression:

js
Copy
Edit
const greet = function() {
  return "Hello";
}
❌ Not hoisted

9. What is an Immediately Invoked Function Expression (IIFE)?
Answer:
An IIFE is a function that runs immediately after it’s defined.

Example:

js
Copy
Edit
(function () {
  console.log("IIFE runs!");
})();
10. What is the event loop in JavaScript?
Answer:
The event loop is what allows JavaScript to be non-blocking, even though it is single-threaded. It handles asynchronous tasks via:

Call Stack

Callback Queue

Web APIs

Example:

js
Copy
Edit
console.log("Start");
setTimeout(() => console.log("Async"), 0);
console.log("End");
Output:

sql
Copy
Edit
Start
End
Async
11. What is a Promise in JavaScript?
Answer:
A Promise represents the eventual completion or failure of an asynchronous operation.

js
Copy
Edit
let p = new Promise((resolve, reject) => {
  resolve("Success");
});

p.then((msg) => console.log(msg)); // Success
12. What are arrow functions and how are they different from normal functions?
Answer: Arrow functions:

Are shorter

Do not have their own this, arguments, or super

Cannot be used as constructors

js
Copy
Edit
const add = (a, b) => a + b;
13. What is the difference between synchronous and asynchronous code?
Synchronous: Tasks are executed one after another (blocking).

Asynchronous: Tasks can be paused and resumed, enabling non-blocking behavior.

14. What is the Temporal Dead Zone (TDZ)?
Answer:
The time between a variable being hoisted and its declaration. Accessing the variable in this zone throws a ReferenceError.

js
Copy
Edit
console.log(a); // ReferenceError
let a = 5;
15. What are higher-order functions?
Answer:
Functions that take other functions as arguments or return a function.

js
Copy
Edit
function greet(fn) {
  fn();
}

greet(() => console.log("Hello"));