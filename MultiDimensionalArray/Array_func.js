let num = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let rowsum= num.map(row => row.reduce((acc, curr) => acc + curr, 0));
console.log(rowsum); // [6, 15, 24]

let colsum = num[0].map((_, colIndex) => num.reduce((acc, row) => acc + row[colIndex], 0));
console.log(colsum); // [12, 15, 18]