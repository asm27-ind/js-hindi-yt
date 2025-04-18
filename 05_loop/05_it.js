// for each

// const coding = ["js","ruby","java","python"]

// //call back fn // call back fn ka naam nhi hota hai.

// coding.forEach( function(item){

// console.log(item);
// } )

// coding.forEach( (val)=>{
//     console.log(val);
// })

// function print(item){
//     console.log(item);
// }

// coding.forEach(print); // only pass ref of fn.

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
// } )
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )