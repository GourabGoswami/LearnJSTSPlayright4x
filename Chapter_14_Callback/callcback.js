function processItem(item, callback) {
    console.log("Processing item:", item);
    callback(item);
}

function showResult(result) {
    console.log("Finished with:", result);
}

processItem("apple", showResult);

