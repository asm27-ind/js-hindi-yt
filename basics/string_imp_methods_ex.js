/*
 you can explore more but these are main imp methods.
 
1. Accessing Characters

1.1 charAt(index) – Get character at a specific index

let str = "JavaScript";
console.log(str.charAt(0));  // "J"
console.log(str.charAt(4));  // "S"
console.log(str.charAt(-1)); // "" (Negative index returns empty string)
console.log(str.charAt(100));// "" (Out of range returns empty string)

1.2 charCodeAt(index) – Get UTF-16 code of a character

console.log(str.charCodeAt(0));  // 74 (Unicode of 'J')
console.log(str.charCodeAt(100)); // NaN (Out of range)

1.3 codePointAt(index) – Get Unicode code point

let emoji = "💖";
console.log(emoji.codePointAt(0)); // 128150
console.log(emoji.codePointAt(1)); // Undefined (Surrogate pairs issue)

2. String Searching Methods

2.1 indexOf(substring, startIndex)
Returns the first occurrence index, or -1 if not found.

console.log(str.indexOf("a"));    // 1
console.log(str.indexOf("Script"));// 4
console.log(str.indexOf("z"));    // -1 (Not found)
console.log(str.indexOf("a", 2)); // 3 (Search starts from index 2)

2.2 lastIndexOf(substring, startIndex)
Searches from the end.

console.log(str.lastIndexOf("a"));  // 3
console.log(str.lastIndexOf("z"));  // -1 (Not found)
console.log(str.lastIndexOf("a", 2));// 1 (Search starts from index 2)

2.3 includes(substring, startIndex)

Returns true if the substring is found.

console.log(str.includes("Script")); // true
console.log(str.includes("Java", 5));// false (Starts from index 5)
console.log(str.includes("Python"));// false

2.4 startsWith(substring, startIndex)

Checks if a string starts with a given substring.

console.log(str.startsWith("Java"));  // true
console.log(str.startsWith("Script", 4)); // true
console.log(str.startsWith("script"));// false (Case-sensitive)

2.5 endsWith(substring, length)

Checks if a string ends with a given substring.

console.log(str.endsWith("Script"));   // true
console.log(str.endsWith("Java", 4));  // true (Checks first 4 chars)
console.log(str.endsWith("script"));   // false (Case-sensitive)

3. String Extraction Methods

3.1 slice(start, end)

console.log(str.slice(0, 4));   // "Java"
console.log(str.slice(-6, -1)); // "Scrip"
console.log(str.slice(4));      // "Script" (Till end)
console.log(str.slice(5, 2));   // "" (start > end)

3.2 substring(start, end)
Similar to slice(), but negative indices are treated as 0.

console.log(str.substring(0, 4));   // "Java"
console.log(str.substring(4));      // "Script"
console.log(str.substring(-6, -1)); // "" (Negative values become 0)
console.log(str.substring(5, 2));   // "vaS" (Swaps start and end)

3.3 substr(start, length) (Deprecated)

console.log(str.substr(0, 4));  // "Java"
console.log(str.substr(-6, 5)); // "Scrip"
console.log(str.substr(4, 10)); // "Script" (More than available length)

4. String Modification Methods

4.1 toUpperCase() and toLowerCase()

console.log(str.toUpperCase()); // "JAVASCRIPT"
console.log(str.toLowerCase()); // "javascript"

4.2 trim(), trimStart(), trimEnd()

let spaced = "   Hello World!   ";
console.log(spaced.trim());       // "Hello World!"
console.log(spaced.trimStart());  // "Hello World!   "
console.log(spaced.trimEnd());    // "   Hello World!"

4.3 padStart(targetLength, padString) and padEnd()

console.log("42".padStart(5, "0"));  // "00042"
console.log("42".padEnd(5, "!"));    // "42!!!"

4.4 repeat(count)

console.log("Ha".repeat(3));   // "HaHaHa"
console.log("Ha".repeat(0));   // ""
console.log("Ha".repeat(-1));  // Error (Invalid count)

5. String Replacement Methods

5.1 replace(searchValue, newValue)

console.log("Hello World".replace("World", "JavaScript")); // "Hello JavaScript"
console.log("aaa".replace("a", "b")); // "baa" (Only first occurrence)

5.2 replaceAll(searchValue, newValue)

console.log("aaa".replaceAll("a", "b")); // "bbb"

6. Splitting and Joining Strings

6.1 split(separator, limit)

console.log("A,B,C".split(","));     // ["A", "B", "C"]
console.log("A-B-C".split("-"));     // ["A", "B", "C"]
console.log("A-B-C".split("-", 2));  // ["A", "B"]
console.log("Hello".split(""));      // ["H", "e", "l", "l", "o"]

6.2 concat(str1, str2, ...)

console.log("Hello".concat(" ", "World")); // "Hello World"

7. String Comparison Methods

7.1 localeCompare()

console.log("apple".localeCompare("banana")); // -1 (Before)
console.log("banana".localeCompare("apple")); // 1  (After)
console.log("apple".localeCompare("apple"));  // 0  (Equal)

8. Template Literals & Interpolation

let name = "John";
console.log(`Hello, ${name}!`); // "Hello, John!"

Edge Cases & Exceptions

Method	               Edge Case
charAt(-1)           	Returns ""
charCodeAt(100)     	Returns NaN
slice(5, 2)         	Returns ""
substring(5, 2)     	Swaps values
repeat(-1)          	Throws an error

*/