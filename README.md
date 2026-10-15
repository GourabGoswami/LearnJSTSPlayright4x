# Learn JavaScript

A collection of small, runnable JavaScript examples organized by topic. The files demonstrate language basics and operators, followed by conditional statements and user input.

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

## Running the examples

Install [Node.js](https://nodejs.org/) to run the console-based examples from the repository root:

```powershell
node .\Chapter_1_Basics\HelloWorld.js
node .\Chapter_4_Operators\IncrementOperatorTask.js
node .\Chapter_06_Statements\Switch.js
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
