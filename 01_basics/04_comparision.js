// console.log(2>1)
// console.log(2>=1);//bool

console.log("2">1); // converting 2 , from string to num and based on that predict result.
console.log("02">1)
// Always try to compare same datatypes.

console.log(null>0)
console.log(null==0)
console.log(null>=0)
/* comparision and equality both work differently >,< they conv null to number 0 while equality not 
that's why null>0 --> 0>0 false.....  null>=0 --> 0==0 -> true */ 

// === strict check (it check both value and its data type it don't use automatic type conversion like ==) .
//  eg.. "2"==2  => true , while "2"===2 => false .
