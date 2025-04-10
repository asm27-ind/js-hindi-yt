// IMMEDIATELY INVOKED FUNCTION EXPRESSION

//Normal Representation

//  function chai(){
//         console.log(`DB CONNECTED`);
//  }
//  chai()
/* Some time to save program from pollution due to global scope we 
try to Write IFE form of it, that run directly.
*/
( function chai(){
    // Named IIFE
        console.log(`DB CONNECTED`);
 })() ; // it will run;//try to use ; after each IIFE otherwise it will generate error 

 (
    (name)=>{
        console.log(`DB CONNECT 2 ${name}`)
    }
 )('hitesh');