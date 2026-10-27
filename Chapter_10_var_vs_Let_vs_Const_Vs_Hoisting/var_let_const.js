var z =10;// cheater
console.log(z);
function print(){
    console.log("Hello World");
    var z= 20;
    console.log(z);
    if(z%5===0)
    {
        var z =40;
        console.log(z);
    }
    console.log(z)
}

print()

let zLet =10;// block scoped
console.log(zLet);
function print(){
    console.log("Hello World");
    let z= 20;
    console.log(z);
    if(z%5===0)
    {
        let z =40;
        console.log(z);
    }
    console.log(z)
}

print()
