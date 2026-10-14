let a = 10;
let b = 11;
console.log(++a + a); // 22
console.log(b++ + b); // 22
console.log(a++ + a + ++a); // 23

let a_ = 100;
console.log(a_++ + ++a_ + a_++ + ++a_);
console.log(a_);

let d = 37;
console.log(--d + d--);
console.log(d);

let x = 5;
let y = x-- - --x;
console.log(y, x);

let i = 1;
let r = i++ > 1 ? i++ : ++i;
console.log(r, i);