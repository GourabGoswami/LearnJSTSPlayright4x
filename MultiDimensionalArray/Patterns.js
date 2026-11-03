// First pattern: prints an increasing triangle
// It starts with 1 star on the first line and increases by 1 each row.
for (i = 0; i < 3; i++) {
    // Inner loop prints '*' a total of i + 1 times for each row.
    for (j = 0; j <= i; j++) {
        process.stdout.write("*");
    }
    // Move to the next line after each row is finished.
    console.log();
}

// Blank line for readability between the two patterns.

// Second pattern: prints a decreasing triangle
// It starts with 5 stars and reduces by 1 each row until 1 star remains.
for (i = 5; i > 0; i--) {
    // Inner loop prints '*' exactly i times for each row.
    for (j = 0; j < i; j++) {
        process.stdout.write("*");
    }
    // Move to the next line after each row is finished.
    console.log();
}

// Centered pyramid: spaces on the left, then stars in the middle.
for (let row = 1; row <= 5; row++) {
    let spaces = " ".repeat(5 - row);
    let stars = "*".repeat(2 * row - 1);
    console.log(spaces + stars);
}

// Keep 2 blank lines between the two pyramid patterns for better readability.
console.log();
console.log();

// Upside-down pyramid: starts with the widest row and shrinks downward.
for (let row = 5; row >= 1; row--) {
    let spaces = " ".repeat(5 - row);
    let stars = "*".repeat(2 * row - 1);
    console.log(spaces + stars);
}
