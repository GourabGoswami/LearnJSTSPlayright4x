// `let` declarations are hoisted, but they are not initialized before this line.
// Accessing `greeting` in this temporal dead zone throws a ReferenceError.
console.log(greeting)

// This declaration initializes `greeting`, but execution never reaches it
// because the earlier access throws.
let greeting ="hello"

// This line also does not run because of the earlier ReferenceError.
console.log(greeting)