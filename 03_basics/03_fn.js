const user = {
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
        // This for current context referring, for given whole block username and price are current context so use this with them.
        console.log(`${this.username},welcome to website`);
        console.log(this); // it will print user with updated values.
    }
}

// user.welcomeMessage() //hitesh,welcome to website

/*
 If printing This:-
{
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/
// user.username="sam"
// user.welcomeMessage() //sam,welcome to website

/* if printing this also
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/
// console.log(this) ; //{}
//  But in browser it will print window object

// function chai(){
//   let username="hitesh"
//   console.log(this) //window object
//   console.log(this.username) //undefined
// }
// chai() //window object

// const chai = function(){
//   let username= "Ram";
//   console.log(this.username) //undefined
// }
/* Arrow Function */
const chai = ()=>{
  let username= "Ram";
  console.log(this.username) //undefined
}

// chai()

// BASIC ARROW FN. ()=>{}

  // const addTwo = (a,b)=>{
  //   return a+b;
  // }
  // console.log(addTwo(2,3)) //5
  // console.log(addTwo(2)) //NaN
  // console.log(addTwo()) //NaN
  // console.log(addTwo(2,3,4)) //5

  // Implicite return
  // const addTwo1 = (a,b)=> a+b;
  // const  addtwo =(a,b)=> (a+b);
  //why to use parenthesis
  const fn1 = ()=> {username:"hitesh"};
  // console.log(fn1()) //undefined
  const fn2 = () => ({username:"hitesh"});
  // console.log(fn2()) //{ username: 'hitesh' }
