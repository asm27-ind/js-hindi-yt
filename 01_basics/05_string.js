const name="Anshul";
const repoCount = 50;
// console.log(name+ repoCount +" value");

//string interpolation
console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

// new way of declaration
const gameName = new String('hitesh-hc'); // object of string
// console.log(gameName)
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(typeof gameName)

console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf("t"))
const newstring=gameName.substring(0,4); // 0 to 3 included 4 is not included
console.log(newstring)

const anotherstr=gameName.slice(-6,5)
console.log(anotherstr)

/*

In JavaScript, the slice() method extracts a portion of a string and returns it as a new string, without modifying the original string.

Syntax:
string.slice(start, end)
start: The index where the extraction begins (inclusive).
end (optional): The index where the extraction stops (exclusive). If omitted, it extracts till the end of the string.

Behavior with Negative Values:

If start is negative, it is counted from the end of the string.
If end is negative, it is counted from the end of the string.

Examples:->

let str = "JavaScript";
console.log(str.slice(0, 4));  // "Java"
console.log(str.slice(4, 10)); // "Script"
console.log(str.slice(4));     // "Script" (Extracts till end)

Using Negative Indices:->

console.log(str.slice(-6, -1)); // "Scrip"
console.log(str.slice(-6));     // "Script" (Extracts from -6 to end)

Edge Cases:->

console.log(str.slice(2, -3));  // "vaSc" (From index 2 to (length-3))
console.log(str.slice(-4, -6)); // "" (Returns empty string if start > end)
console.log(str.slice(5, 2));   // "" (Returns empty string if start > end) */


const newstr="  hitesh   "
console.log(newstr)
console.log(newstr.trim())

const url="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));

// try to learn more methods of string and try to memorise them.

console.log(url.includes('hitesh')) // return whether given string is present in actual url or not
//converting or breaking string in array
console.log(gameName.split('-')) //[ 'hitesh', 'hc' ]
/*
const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]


anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()

// */