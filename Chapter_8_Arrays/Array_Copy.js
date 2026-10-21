let arr =[5,6,7]
let arr2 = [...arr] // using spread operator to copy the array
console.log(arr2) // Output: [5, 6, 7]
let arr3 = arr.slice() // using slice to copy the array
console.log(arr3) // Output: [5, 6, 7]
arr.push(10)
console.log(arr) // Output: [5, 6, 7, 10]
console.log(arr2) // Output: [5, 6, 7] - arr2 is a copy of arr, so it does not reflect the change made to arr
arr3.pop(6)
console.log(arr3) // Output: [5, 6] - arr3 is a copy of arr, so it does not reflect the change made to arr
console.log(arr) // Output: [5, 6, 7, 10] - arr is not affected by the change made to arr3


//deepcopy
let arr4 =arr;
arr.push(8)
console.log(arr) // Output: [5, 6, 7, 8]
console.log(arr4) // Output: [5, 6, 7, 8] - arr4 is a reference to arr, so it reflects the change made to arr
arr4.push(9)
console.log(arr) // Output: [5, 6, 7, 8, 9] - arr is also affected by the change made to arr4
console.log(arr4) // Output: [5, 6, 7, 8, 9] - arr4 is a reference to arr, so it reflects the change made to arr