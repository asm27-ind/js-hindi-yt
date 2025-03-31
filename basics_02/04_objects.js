// const tinderuser = new Object(); // singleton obj.
const tinderuser = {}; // literal object
tinderuser.id = "123abc";
tinderuser.name = "Sam";
tinderuser.isLoggedIn = false;

// console.log(tinderuser)

/* Object within object */

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userfullname: {
      firstname: "ram",
      lastname: "kulkarni",
    },
  },
};

// console.log(regularUser.fullName.userfullname.firstname)
/* Combining two objects */
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
//const obj3 = {obj1,obj2} //obj within obj
//const obj3 = Object.assign({},obj1,obj2) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
/* 
Object.assign(target,source1,source2,....);
this fn copy value from source1,source2,.... to target and return it.
if Object.assign(obj1,obj2) ==>> copy entities of obj2 in obj2 and return it as new object .
so changes will be made in obj1 also.
so to prevent this we uses empty object in this syntax as a target;
Object.assign({},source1,source2,....);
*/

//NEW WAY
const obj3 = { ...obj1, ...obj2 }; //spread operator
//console.log(obj3);

// How value come from database

/* As an Array of Objects */
const users = [
  {
    id: 1,
    email: "RAMESHWAR@gmail.com",
  },
  {
    id: 1,
    email: "RAMESHWAR@gmail.com",
  },
  {
    id: 1,
    email: "RAMESHWAR@gmail.com",
  },
  {
    id: 1,
    email: "RAMESHWAR@gmail.com",
  },
];

// users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser)); // Object.keys(obj_name) =>it return array of all keys // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderuser)); // [ '123abc', 'Sam', false ]
// console.log(Object.entries(tinderuser)); // return array of [key,value] // [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]

// console.log(tinderuser.hasOwnProperty("isLoggedIn")); // to check whether a specific key exist or not // true;

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
};

// course.courseInstructor

/* Destructuring of object */

// const {courseInstructor} = course
const {courseInstructor:instructor} = course // we are extracting key value from course and can use it by its key name 
// or can rename it for access only.
//ex:-
//console.log(courseInstructor) // hitesh
console.log(instructor) // hitesh


