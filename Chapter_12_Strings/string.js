// charCodeAt(0) returns the UTF-16 code unit at index 0; these values show uppercase and lowercase letter codes.
console.log("A".charCodeAt(0)); // 65
console.log("Z".charCodeAt(0)); // 90
console.log("a".charCodeAt(0)); // 97
console.log("z".charCodeAt(0)); // 122

let a = "abcdef"; // Store a string so the following examples can demonstrate string methods.
console.log(a.at(-5)); // Read the character five positions from the end: "b".
console.log(a.at(-10)); // The index is before the start of the string, so at() returns undefined.
console.log(a.indexOf(10)); // Search for "10" (the number is converted to text); it is absent, so the result is -1.

// Template literals use backticks and allow interpolation with ${...}, as well as multiline text.
let name1 = "Alice"; // Define a value to insert into the template literal.
let msg = `Hello, ${name1}! 2 + 2 = ${2 + 2}`; // Insert the name and evaluate the arithmetic expression.
console.log(msg); // Print: Hello, Alice! 2 + 2 = 4.



let a2 = 'dasdad "a"sdsa\ndasd'; // Store text containing double quotes and \n, which represents a line break.

let str = "Hello, World!"; // Define a string for the character-access examples.
console.log(str.length); // Print the number of characters: 13 (length is a count, not a zero-based index).
console.log(str[0]); // Print the character at zero-based index 0: "H".
console.log(str[7]); // Print the character at zero-based index 7: "W".
console.log(str.at(-1)); // A negative at() index counts from the end; -1 selects the last character, "!".
console.log(str.at(-6)); // Select the sixth character from the end: "W".
console.log("slice:", str.slice(-6)); // A negative start index counts from the end; return the last 6 characters: "World!".

// charAt() takes a zero-based index and returns the character at that position.
console.log(str.charAt(0)); // Print "H", the character at index 0.
console.log(str.charCodeAt(0)); // Print 72, the UTF-16 code unit for "H".

console.log(str.toUpperCase()); // Convert the string to uppercase using the default Unicode casing rules: "HELLO, WORLD!".
console.log(str.toLocaleUpperCase("tr-TR")); // Convert using Turkish casing rules; locale-specific letters such as "i" become "İ".
