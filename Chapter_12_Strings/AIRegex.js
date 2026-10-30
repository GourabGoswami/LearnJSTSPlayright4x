// A regular expression (regex) is a pattern used to find, check, extract, or replace text.
// JavaScript regexes can be written as /pattern/flags or created with new RegExp("pattern").

const sentence = "JavaScript is fun. javascript is powerful."; // Sample text used by several examples below.

const caseSensitivePattern = /javascript/; // Regex matching is case-sensitive unless the i flag is added.
console.log(caseSensitivePattern.test(sentence)); // Print false because the sentence starts with uppercase "J".

const caseInsensitivePattern = /javascript/i; // The i flag makes matching ignore uppercase/lowercase differences.
console.log(caseInsensitivePattern.test(sentence)); // Print true because "JavaScript" matches regardless of case.

const allOccurrences = sentence.match(/javascript/gi); // g finds every occurrence and i ignores letter case.
console.log(allOccurrences); // Print ["JavaScript", "javascript"].

const firstOccurrence = sentence.match(/javascript/i); // Without g, match() returns details for only the first match.
console.log(firstOccurrence[0]); // Print the matched text: "JavaScript".
console.log(firstOccurrence.index); // Print 0, the zero-based position where the match begins.

// Common pattern building blocks:
// \d means a digit, \w means a letter/digit/underscore, and \s means whitespace.
// [abc] matches one listed character; [A-Z] matches one uppercase English letter.
// + means one or more, * means zero or more, and {n} means exactly n repetitions.
const orderCodePattern = /\d{3}-\d{2}/; // Match exactly three digits, a hyphen, then exactly two digits.
console.log(orderCodePattern.test("Order 123-45 is ready")); // Print true because "123-45" fits the pattern.

const namePattern = /^[A-Z][a-z]+$/; // ^ and $ anchor the pattern to the whole string.
console.log(namePattern.test("Alice")); // Print true: uppercase first letter followed by lowercase letters.
console.log(namePattern.test("alice")); // Print false: the first character must be uppercase.

console.log(sentence.search(/fun/i)); // search() returns the first matching position: 14.
console.log(sentence.search(/missing/i)); // If there is no match, search() returns -1.

const replacedSentence = sentence.replace(/javascript/gi, "TypeScript"); // Replace every case-insensitive occurrence.
console.log(replacedSentence); // Print "TypeScript is fun. TypeScript is powerful.".

const repeatedWords = "red, green   blue"; // A string with commas and one or more spaces between words.
console.log(repeatedWords.split(/[,\s]+/)); // Split on one or more commas or whitespace characters.
// Print ["red", "green", "blue"].

const foundWords = [...sentence.matchAll(/javascript/gi)]; // matchAll() returns details for every match; g is required.
console.log(foundWords.map((match) => match.index)); // Print [0, 19], the start positions of both matches.

// String.match(), search(), replace(), replaceAll(), and split() accept regex patterns.
// Regex.test() checks whether a match exists; it returns a boolean (true or false).
// Use regex when a text rule is more useful than searching for one exact, fixed substring.
