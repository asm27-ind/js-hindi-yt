function sayMyname(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}
//sayMyname(); // name of fn is reference

// function addTwoNum(number1,number2){ // number1 , number2 are arguments
//    console.log( number1+number2)
// }

// addTwoNum(2,5) //2,5 are arguments

// function addTwoNum(number1,number2){
//    return number1+number2
// }
// res = addTwoNum(2,5)
// console.log("result is:",res) 

// function userLogin(username){
//     if(!username) {
//         console.log("Please Enter a username");
//         return;
//     }
//    return `${username} justlogged in`
// }
// userLogin("Hitesh")
//  console.log(userLogin("Hitesh")) // Hitesh justlogged in
//  console.log(userLogin() ) //undefined justlogged in

//  function calculateCartPrice(...num1) //rest operation bundled things
// {
//     return num1;
// }

// console.log(calculateCartPrice(200,400,500,600))
 function calculateCartPrice(val1,val2,...num1) //rest operation bundled things
{
    return num1;
}

console.log(calculateCartPrice(200,400,500,600)) // [ 500, 600 ]

const user = {
    username:"hitesh",
    prices: 199

}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price : 399

})

const myarr = [200,400,900]
 function returnarr(getarr){
    return getarr[1];
 }

//  console.log(returnarr(myarr));
console.log([50,90,40]);
