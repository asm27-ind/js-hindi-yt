const score=100

const balance =new Number(100) // object of number
/*
//1) toString method:-

console.log(balance) // [Number: 100]

console.log(balance.toString().length) // conv into sstring and now will support all methods of string along with to string fn.

console.log(typeof balance.toString()) // string

console.log(typeof balance); // object

*/
/*
// 2) tofixed property

console.log(balance.toFixed(2)); //100.00

//3) toprecision property

    const othernum = 1123.6874
console.log(othernum.toPrecision(2)) //1.1e+3
console.log(othernum.toPrecision(3)) //1.12e+3
console.log(othernum.toPrecision(4)) // 1124
console.log(othernum.toPrecision(6)) // 1123.69
console.log(typeof othernum.toPrecision(2)) // string return

const hundread=100000000
console.log(hundread.toLocaleString()); // 100,000,000 -- according to us standard
console.log(hundread.toLocaleString('en-IN')); // 10,00,00,000 -- according to Indian standard
// both return string...only...

*/

//  +++++++++++++++++++ Maths +++++++++++++++++++++++

// Math is inbuilt library in js.
console.log(Math); // Object [Math] {}(signifying that this obj. having multiple property)
 // i.e it is object named Math containing multiple property
// console.log(Math.abs(-5)); // 5
// console.log(Math.round(4.6)); // 5
// console.log(Math.round(4.38)); // 4
// console.log(Math.ceil(4.38)); // 5 (upper bound)
// console.log(Math.floor(4.38)); // 4 (lower bound)
console.log(Math.random()); // gen. random number in bw 0-1.
console.log(Math.random()*10); // gen. random number in bw 0-10.
console.log(Math.floor(Math.random()*10)+1); // gen. random number in bw 1-10.
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min) // from min to max inclusive; 
/*

 Math Constants in JavaScript:

Constant	             Description	                            Value
Math.E	          Euler’s Number (Base of Natural Logarithm)    	2.718281828459045
Math.LN2	      Natural Log of 2	                                0.6931471805599453
Math.LN10	      Natural Log of 10	                                2.302585092994046
Math.LOG2E	      Log base 2 of Euler’s Number	                    1.4426950408889634
Math.LOG10E	      Log base 10 of Euler’s Number	                    0.4342944819032518
Math.PI	          Pi (π)	                                        3.141592653589793
Math.SQRT1_2	  Square Root of 1/2	                            0.7071067811865476
Math.SQRT2	      Square Root of 2	                                1.4142135623730951

Math Methods with Examples:-

1️⃣ Math.abs(x)
Returns the absolute value of a number.

console.log(Math.abs(-5));  // 5
console.log(Math.abs(0));   // 0
console.log(Math.abs(4.3)); // 4.3

2️⃣ Math.acos(x)
Returns the arccosine (inverse cosine) of x in radians.

🛑 Edge Case: Input must be between -1 and 1.

console.log(Math.acos(1));   // 0
console.log(Math.acos(0));   // 1.5707963267948966 (π/2)
console.log(Math.acos(-1));  // 3.141592653589793 (π)
console.log(Math.acos(2));   // NaN (out of range)

3️⃣ Math.acosh(x)
Returns the inverse hyperbolic cosine of x.
🛑 Edge Case: Input must be ≥ 1.

console.log(Math.acosh(1));  // 0
console.log(Math.acosh(2));  // 1.3169578969248166
console.log(Math.acosh(0.5)); // NaN (out of range)

4️⃣ Math.asin(x)
Returns the arcsine (inverse sine) of x in radians.
🛑 Edge Case: Input must be between -1 and 1.

console.log(Math.asin(0));   // 0
console.log(Math.asin(1));   // 1.5707963267948966 (π/2)
console.log(Math.asin(-1));  // -1.5707963267948966 (-π/2)
console.log(Math.asin(2));   // NaN (out of range)

5️⃣ Math.asinh(x)
Returns the inverse hyperbolic sine of x.

console.log(Math.asinh(0));   // 0
console.log(Math.asinh(1));   // 0.881373587019543
console.log(Math.asinh(-1));  // -0.881373587019543

6️⃣ Math.atan(x)
Returns the arctangent (inverse tangent) of x.

console.log(Math.atan(1));  // 0.7853981633974483 (π/4)
console.log(Math.atan(0));  // 0
console.log(Math.atan(-1)); // -0.7853981633974483 (-π/4)

7️⃣ Math.atan2(y, x)
Returns the angle in radians between the positive x-axis and a point (x, y). Useful for 2D geometry.

console.log(Math.atan2(1, 1));  // 0.7853981633974483 (π/4)
console.log(Math.atan2(-1, 1)); // -0.7853981633974483 (-π/4)
console.log(Math.atan2(1, 0));  // 1.5707963267948966 (π/2)

8️⃣ Math.cbrt(x)
Returns the cube root of x.

console.log(Math.cbrt(27));   // 3
console.log(Math.cbrt(-27));  // -3
console.log(Math.cbrt(8));    // 2

9️⃣ Math.ceil(x)
Rounds x up to the nearest integer.

console.log(Math.ceil(4.2));  // 5
console.log(Math.ceil(-4.8)); // -4

🔟 Math.floor(x)
Rounds x down to the nearest integer.

console.log(Math.floor(4.8));  // 4
console.log(Math.floor(-4.2)); // -5

1️⃣1️⃣ Math.cos(x)
Returns the cosine of x (radians).

console.log(Math.cos(0));    // 1
console.log(Math.cos(Math.PI / 2)); // 0

1️⃣2️⃣ Math.exp(x)
Returns e^x.

console.log(Math.exp(1));   // 2.718281828459045 (Euler’s Number)
console.log(Math.exp(2));   // 7.38905609893065

1️⃣3️⃣ Math.log(x)
Returns the natural logarithm of x.

console.log(Math.log(1));   // 0
console.log(Math.log(Math.E)); // 1
console.log(Math.log(10));  // 2.302585092994046

1️⃣4️⃣ Math.log2(x)
Returns the base-2 logarithm of x.

console.log(Math.log2(8));  // 3
console.log(Math.log2(32)); // 5

1️⃣5️⃣ Math.max(x1, x2, ...)
Returns the largest number.

console.log(Math.max(10, 3, 7));  // 10
console.log(Math.max(-2, -5, 0)); // 0

1️⃣6️⃣ Math.min(x1, x2, ...)
Returns the smallest number.

console.log(Math.min(10, 3, 7));  // 3
console.log(Math.min(-2, -5, 0)); // -5

1️⃣7️⃣ Math.pow(x, y)
Returns x^y.

console.log(Math.pow(2, 3));  // 8
console.log(Math.pow(5, 0.5)); // 2.23606797749979 (Square Root)

1️⃣8️⃣ Math.random()
Returns a random number between 0 and 1.

console.log(Math.random()); // Example output: 0.734531
console.log(Math.random() * 10); // Random number between 0-10

1️⃣9️⃣ Math.round(x)
Rounds x to the nearest integer.

console.log(Math.round(4.3)); // 4
console.log(Math.round(4.7)); // 5

*/
