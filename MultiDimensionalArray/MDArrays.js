const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Access the element in row 2, column 3 (indexes start at 0).
console.log(numbers[1][2]); // 6

// Loop through each row and each element in that row.
for (let row = 0; row < numbers.length; row++) {
    for (let column = 0; column < numbers[row].length; column++) {
        console.log(numbers[row][column]);
    }
}

numbers[0][0] = 10; // Change the first element to 10
console.log(numbers); // [[10, 2, 3], [4, 5, 6], [7, 8, 9]]
