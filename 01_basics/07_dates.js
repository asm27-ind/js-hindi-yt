//Date object
let mydate=new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());

//let mynewDate = new Date(2023,0,24,5,3,30) // yr month day  hr min sec (month follow 0nbased indexing)
//let mynewDate = new Date("2023-01-14") // yyyy-mm-dd
// let mynewDate = new Date("01-14-2023") // mm-dd-yyyy

// console.log(mynewDate.toLocaleString());

let mytimestamp= Date.now()
// console.log(mytimestamp);
// //The Date.now() function in JavaScript returns the current timestamp in milliseconds 
// // since January 1, 1970 (UTC), also known as the Unix Epoch time.
// console.log(mynewDate.getTime()); // return time in ms from 1 jan 1970 to 14th jan 2023.

// how to convert ms to sec?

// console.log(Math.floor(Date.now()/1000));


let newdate = new Date()
console.log(newdate.getMonth()+1)
console.log(newdate.getDay()) // day 1-mon 2-tue ....
newdate.toLocaleString('default',{
    weekday: "long"
}) // can customize format of localstring.

console.log(newdate.toLocaleString('default',{
    day:"numeric",
    month:"long",
    year:"2-digit",
    timeZoneName:"long"
}))