// Step 1: Declare a function that starts an asynchronous operation.
// It receives a value and a callback function as arguments.
function getItemAsync(item, callback) {
    console.log("Starting to get the item...");

    // Step 2: setTimeout schedules this function to run after 1 second.
    // JavaScript can continue running other code while it waits.
    setTimeout(() => {
        const result = `Got: ${item}`;

        // Step 4: Once the timer finishes, call the callback and pass it
        // the result of the asynchronous operation.
        callback(result);
    }, 1000);
}

// Step 5: This function is the callback. It handles the result when ready.
function showItem(result) {
    console.log(result);
}

// Step 3: Call getItemAsync, passing in the item and the callback function.
getItemAsync("apple", showItem);

// This line runs before the callback because the timer is asynchronous.
console.log("This message appears while waiting.");