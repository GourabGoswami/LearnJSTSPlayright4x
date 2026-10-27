const browsers = ["Chrome", "Firefox", "Safari", "Edge", "Opera"];

// Accessing elements in the array
console.log(browsers[0]); // Output: Chrome
console.log(browsers[2]); // Output: Safari
console.log(browsers[-1]); // Output: Opera (last element)
console.log(typeof browsers); // Output: object
console.log(browsers.at(-1)); // Output: Opera (last element using at() method)

let arr = new Array(5); // Creates an array with 5 empty slots
arr[0] = "First";
arr[1] = "Second";
arr[2] = "Third";
arr[3] = "Fourth";
arr[4] = "Fifth";
console.log(arr); // Output: [ 'First', 'Second', 'Third', 'Fourth', 'Fifth' ]
arr[1]= "Updated Second"; // Updates the second element
console.log(arr); // Output: [ 'First', 'Updated Second', 'Third', 'Fourth', 'Fifth' ]
// Array methods
browsers.push("Brave"); // Adds "Brave" to the end of the array
console.log(browsers); // Output: [ 'Chrome', 'Firefox', 'Safari', 'Edge', 'Opera', 'Brave' ]

browsers.pop(); // Removes the last element ("Brave") from the array
console.log(browsers); // Output: [ 'Chrome', 'Firefox', 'Safari', 'Edge', 'Opera' ]

browsers.shift(); // Removes the first element ("Chrome") from the array
console.log(browsers); // Output: [ 'Firefox', 'Safari', 'Edge', 'Opera' ]

browsers.unshift("Chrome"); // Adds "Chrome" to the beginning of the array
console.log(browsers); // Output: [ 'Chrome', 'Firefox', 'Safari', 'Edge', 'Opera' ]

let arr1 = [1, 2, 3, 4, 5];
arr1.splice(2, 1); // Removes 1 element at index 2 ("Safari")
console.log(arr1); // Output: [ 1, 2, 4, 5 ]
arr1.splice(2, 0, 3); // Adds "3" at index 2 without removing any elements
console.log(arr1); // Output: [ 1, 2, 3, 4, 5 ]
arr1.splice(2, 1, 6); // Replaces the element at index 2 with "6"
console.log(arr1); // Output: [ 1, 2, 6, 4, 5 ]
arr1.splice(2, 1, 3, 4); // replaces and Adds "3" and "4" at index 2 without removing any elements


const tags = ["smoke", "regression"];
console.log(tags.includes("smoke"));
console.log(tags.indexOf("sanity"));