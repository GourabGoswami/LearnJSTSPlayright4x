function add(a,b,c){
    return a+b+c
}
let arr= [1,2,3,4]
console.log(add(...arr))

let a= (...codes) => codes.some(m=>m==200 || m==201)
console.log(a(...[200,201,404,500]))
