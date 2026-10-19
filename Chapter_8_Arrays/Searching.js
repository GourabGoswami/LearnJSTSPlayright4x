let a = [1, 2, 3, 2, 5];
a.includes(3); // Checks if the array includes the value 3
console.log(a.includes(3)); // Output: true
a.indexOf(5); // Returns the index of the first occurrence of 5
console.log(a.indexOf(5)); // Output: 4
a.lastIndexOf(2); // Returns the index of the last occurrence of 2
console.log(a.lastIndexOf(2)); // Output: 1

a.find((element) => element > 3); // Returns the first element that is greater than 3
console.log(a.find((element) => element > 3)); // Output: 5
a.find(element => element > 1); // Returns undefined if no element is found
console.log("fgdert", a.find(element => element > 2)); // Output: undefined

a.indexOf(100); // Returns -1 if the value is not found
console.log(a.indexOf(100)); // Output: -1

let g= [2,5,7,9,5];
console.log(g.findIndex((element) => element > 5)); // Returns the index of the first element that is greater than 5
console.log(g.find((element) => element > 5)); // Returns the first element that is greater than 5