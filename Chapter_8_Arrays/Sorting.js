let fruits = ["Banana", "Orange", "Apple", "Mango"];
// Using sort to sort the array in ascending order
fruits.sort();
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]
fruits.reverse(); // Using reverse to reverse the order of the array
console.log(fruits); // Output: [ 'Orange', 'Mango', 'Banana', 'Apple' ]

let arr = [40, 100, 1, 5, 25, 10];
// Using sort to sort the array in ascending order
arr.sort((a, b) => a - b);
console.log(arr); // Output: [ 1, 5, 10, 25, 40, 100 ]

let arr2 = [10,1,25,2];
arr2.sort();
console.log(arr2); // Output: [ 1, 10, 2, 25 ] - sorts as strings by default    , lexicographic sorting 
arr2.sort((a, b) => a - b);
console.log(arr2); // Output: [ 1, 2, 10, 25 ] - sorts as numbers with a compare function
arr2.sort((a, b) => b - a);
console.log(arr2); // Output: [ 25, 10, 2, 1 ] - sorts in descending order with a compare function

let arr3 = [10,-10]
arr3.sort();
console.log(arr3); 

let 

