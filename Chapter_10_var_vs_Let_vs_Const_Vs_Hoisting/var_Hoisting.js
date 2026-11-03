// `var` declarations are hoisted to the top of their scope and initialized as `undefined`.
console.log(greeting)

// The assignment happens here, so the next log prints "hello".
var greeting = "hello"
console.log(greeting)