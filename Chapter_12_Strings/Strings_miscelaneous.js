// String methods return results; they do not change the original string.
const message = "JavaScript makes strings useful. JavaScript is fun.";

// replace() replaces only the first matching occurrence when given a plain string.
console.log(message.replace("JavaScript", "TypeScript"));
// Print "TypeScript makes strings useful. JavaScript is fun."

// replaceAll() replaces every occurrence of the exact text.
console.log(message.replaceAll("JavaScript", "TypeScript"));
// Print "TypeScript makes strings useful. TypeScript is fun."

// substring(start, end) returns characters from start up to, but not including, end.
console.log(message.substring(0, 10)); // Print "JavaScript", characters at indexes 0 through 9.

// startsWith() checks whether the string begins with the given text; it returns true or false.
console.log(message.startsWith("JavaScript")); // Print true.
console.log(message.startsWith("strings")); // Print false because "strings" occurs later in the message.

// endsWith() checks whether the string finishes with the given text; it returns true or false.
console.log(message.endsWith("fun.")); // Print true.
console.log(message.endsWith("useful.")); // Print false because "useful." is not at the end.

// split() divides a string wherever the separator occurs and returns an array of parts.
const colors = "red,green,blue";
console.log(colors.split(",")); // Print ["red", "green", "blue"].

// slice(start, end) returns part of a string; a negative index counts backward from the end.
console.log(message.slice(0, 10)); // Print "JavaScript", from index 0 up to (but not including) index 10.
console.log(message.slice(-4)); // Print "fun.", the last 4 characters.

// includes() checks whether the string contains the given text; the check is case-sensitive.
console.log(message.includes("strings")); // Print true.
console.log(message.includes("Strings")); // Print false because the letter casing is different.
