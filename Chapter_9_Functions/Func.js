function add(a, b) {
    return console.log(a + b);
}

add(5, 10); // This will log 15 to the console

console.log(multiply(2, 3));
const multiply = (a, b) => a * b;

function name(firstName, lastName) {
     return console.log(`My name is ${firstName} ${lastName}`);
}

name('raj','pandey')

const divide = function (a,b){
    return a/b;
}

console.log(divide(10,5))

const remainder= (a,b)=>a%b
console.log(remainder(10,3))

let result= (marks)=>{
    if(marks>50)
        return "pass"
    else
        return "fail"
}
console.log(result(50))

//function calling itself

(function(){
return console.log("hi")
})()

function logStep(step) {
  console.log("step: " + step);
}
const res = logStep("login");
console.log(res);


(function () {
  var secret = "token";
  console.log("ran");
})();
console.log(typeof secret);

function counter() {
  let count = 0;
  return () => ++count;
}
const next = counter();
next();
console.log(next());