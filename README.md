# Learn JavaScript

A collection of JavaScript examples organized by topic, covering language fundamentals, operators, control flow, user input, variables and scope, closures, strings, arrays, functions, and objects. The repository also includes a visual object-copying guide and an ELI5 Claude Code skill with an evaluation workspace.

## Contents

### Chapter 1: Basics

Files in `Chapter_1_Basics/` introduce console output, equality comparisons, type coercion, and variable behavior:

- `HelloWorld.js` prints values and compares loose (`==`) and strict (`===`) equality.
- `ffd.js` explores `null` and `undefined`, coercion, `var` versus `let` scope, `const` reassignment, and an uninitialized variable.

### Chapter 2: JavaScript keywords

- `Chapter_2_JSKeywords/KW_IND.js` demonstrates variable declarations and valid identifier styles, including underscores and `$`.

### Chapter 3: Literals and values

Examples in `Chapter_3_JSLiterals/` cover:

- `Numberal.js`: number, string, boolean, null, undefined, hexadecimal, and scientific-notation values, with `typeof`.
- `Numbers 2.js`: numeric separators, binary and octal notation, and `BigInt`.
- `Special.js`: `Infinity`, `NaN`, division by zero, and invalid numeric operations.

### Chapter 4: Operators

Examples in `Chapter_4_Operators/` cover:

- `Arch.js`: addition, string concatenation, coercion, and result types.
- `ArithmeticOperator.js`: assigning a new value to a variable.
- `AssignmentOperator`: loose and strict equality and inequality comparisons.
- `ComparisonOperator.js`: the remainder (`%`) operator.
- `IncrementOperatorTask.js`: prefix and postfix increment/decrement in expressions.
- `LogicalOperators.js`: short-circuit behavior of `&&` and `||`.
- `NestedTernary.js` and `TernaryOperators.js`: conditional expressions for age, status codes, environment URLs, temperature, and response-time checks.
- `Nullish.js`: the nullish coalescing operator (`??`).
- `Strings.js`: string concatenation.

### Chapter 6: Statements

Examples in `Chapter_06_Statements/` cover:

- `IF.js`: nested `if` statements and an example score-grade selection.
- `Switch.js`: `switch`/`case` selection for days and a second switch example.

### Chapter 7: User Input Ways

Examples in `Chapter_07_UserInputWays/` cover:

- `UserInput.js`: reads a number with the browser's `prompt()` and reports whether it is even or odd.
- `PromptSync.js`: reads a number from the terminal with `prompt-sync` and reports whether it is even or odd.

### Chapter 7: Loops

Examples in `Chapter_7_Loops/` cover:

- `Loop.js`: demonstrates `for`, `while`, and `do...while` loops, including their conditions and execution behavior.
- `Break.js`: demonstrates using `break` to exit a `while` loop.

### Chapter 8: Arrays

Examples in `Chapter_8_Arrays/` cover:

- `Arrays.js`: creates and accesses arrays, updates elements, and demonstrates `push`, `pop`, `shift`, `unshift`, and `splice`. It also shows that bracket access with a negative index does not retrieve the last element, while `at(-1)` does.
- `Array_Check.js`: uses `Array.isArray()` to check whether values are arrays.
- `Array_Copy.js`: compares independent copies made with the spread operator and `slice()` with a second variable that references the same array.
- `Slicing.js`: uses `slice()` with start, end, and negative indexes to create portions of an array without changing the original.
- `Searching.js`: demonstrates `includes`, `indexOf`, `lastIndexOf`, `find`, and `findIndex`.
- `Iterate.js`: iterates through an array with a `for` loop.
- `Every.js`: demonstrates `every()` and `some()` for testing array elements.
- `Sorting.js`: demonstrates `sort()` and `reverse()`, including default string ordering and numeric comparators for ascending and descending order.
- `swapping.js`: swaps two variables using array destructuring.
- `transform.js`: demonstrates `forEach`, `map`, `filter`, and `reduce`.

### Chapter 9: Functions

- `Chapter_9_Functions/Func.js` demonstrates function declarations, arrow functions, function expressions, parameters and return values, immediately invoked function expressions (IIFEs), local scope, and closures. Its `multiply` example calls a `const` arrow function before its initialization, so running the file as-is throws a `ReferenceError` at that call and does not execute the later examples.
- `Chapter_9_Functions/SpecialFunc.js` demonstrates rest parameters, spreading an array into a function call, and using `some()` to check a list of status codes.

### Chapter 10: Variables, scope, and hoisting

Examples in `Chapter_10_var_vs_Let_vs_Const_Vs_Hoisting/` cover:

- `var_let_const.js`: compares how `var` and `let` behave in function and block scopes.
- `var_Hoisting.js`: shows that a `var` declaration is available as `undefined` before its assignment.
- `let_hoisting.js`: demonstrates the temporal dead zone; accessing a `let` variable before its declaration throws a `ReferenceError` and stops the script.

### Chapter 11: Closures

- `Chapter_11_Closure/CLosure.js` returns an inner function that retains access to a variable from its outer function. It logs the captured value, then its final call to the out-of-scope `installBrowser` name throws a `ReferenceError`.

### Chapter 12: Strings and regular expressions

Examples in `Chapter_12_Strings/` cover:

- `string.js`: character codes and access, negative indexes with `at()` and `slice()`, string searching, and template literals.
- `Strings_miscelaneous.js`: replacing text, extracting substrings, checking prefixes/suffixes and containment, and splitting strings.
- `AIRegex.js`: regex matching and flags, common pattern syntax, searching, replacing, splitting, and retrieving all matches.
- `new.js`: counts vowels and non-vowels in a sample string, then compares two strings after sorting their characters as an anagram check.

### Chapter 13: Objects

Examples in `Chapter_13_Objects/` cover:

- `Objects.js`: creates an object and reads its properties with dot and bracket notation.
- `Objects_Copy.js`: compares assigning an object reference, making a shallow copy with spread syntax, and making a deep copy with `structuredClone()`.
- [`ELI5/Objects_Copy_Explained.html`](ELI5/Objects_Copy_Explained.html): a visual, beginner-friendly walkthrough of how those copies and their nested objects behave.

### Additional array and pattern examples

Examples in `MultiDimensionalArray/` cover:

- `MDArrays.js`: declares a 2D array, accesses an element by row and column, and loops through every element with nested `for` loops.
- `Array_func.js`: uses `map()` and `reduce()` to calculate row and column totals for a 2D array.
- `Patterns.js`: prints increasing and decreasing triangles and centered and inverted star pyramids.

`Chapter_8_Arrays/Lexicographic_Explain.md` explains lexicographic sorting and why numeric array sorting requires a comparator.

### ELI5 skill and evaluation workspace

`ELI5/` contains a Claude Code skill that adapts explanations to different audiences, along with its own setup and usage guide in [`ELI5/README.md`](ELI5/README.md). The `ELI5/eli5-workspace/` directory contains evaluation cases, a runner, tests, and evaluation documentation.

## Running the examples

Install [Node.js](https://nodejs.org/) to run the console-based examples from the repository root:

```powershell
node .\Chapter_1_Basics\HelloWorld.js
node .\Chapter_4_Operators\IncrementOperatorTask.js
node .\Chapter_06_Statements\Switch.js
node .\Chapter_8_Arrays\Array_Check.js
node .\Chapter_8_Arrays\Slicing.js
node .\MultiDimensionalArray\MDArrays.js
node .\MultiDimensionalArray\Array_func.js
node .\MultiDimensionalArray\Patterns.js
node .\Chapter_9_Functions\Func.js
```

To install the dependency used by `PromptSync.js`, run this from the repository root in PowerShell:

```powershell
npm.cmd install
```

Then run it with:

```powershell
node .\Chapter_07_UserInputWays\PromptSync.js
```

`Chapter_07_UserInputWays\UserInput.js` uses `prompt()`, which is provided by a browser rather than Node.js. Open that file in a browser-based JavaScript environment to enter a number and see the result.

These are individual learning examples; there is no shared application entry point or automated test suite.
