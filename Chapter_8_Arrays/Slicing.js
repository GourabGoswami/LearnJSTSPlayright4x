let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Using slice to create a new array with elements from index 2 to 5 (not including index 5)
let slicedArray = num.slice(2, 5);
console.log(slicedArray); // Output: [3, 4, 5]
console.log(num)
console.log(num.slice(2)) 
console.log(num.slice(-2))
console.log(num.slice(2, -2))
console.log(num.slice(-2, -5)) // Output: [] - returns an empty array since the start index is greater than the end index   