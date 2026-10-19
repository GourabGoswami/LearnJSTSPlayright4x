let marks = [90, 80, 70, 60, 50];
// Using forEach to iterate through the array
marks.forEach((mark, index) => {
    console.log(`Mark at index ${index}: ${mark}`);
});

let results = marks.map(i=>i>50?"Pass":"Fail");// Using map to create a new array based on the condition
console.log(results);// Output: [ 'Pass', 'Pass', 'Pass', 'Pass', 'Fail' ]

marks.filter(i=>i>50);// Using filter to create a new array with elements that pass the condition
console.log(marks.filter(i=>i>50));// Output: [ 90, 80, 70, 60 ]

marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Using reduce to calculate the sum of all elements in the array
console.log(marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0)); // Output: 350