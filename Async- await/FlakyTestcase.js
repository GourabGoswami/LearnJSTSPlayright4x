// Retry Pattern with Async/Await - REAL QA
// One simulated API succeeds after two failures;
// another exhausts its retries.

function createFlakyAPIs(successAttempt) {
    let attempt = 0;

    return function () {
        attempt++;

        if (attempt < successAttempt) {
            return Promise.reject("Attempt " + attempt + ": failed");
        }

        return Promise.resolve("Attempt " + attempt + ": success!");
    };
}

async function retryTesting() {
    const flakyAPI = createFlakyAPIs(5);

    for (let i = 1; i <= 5; i++) {
        try {
            const result = await flakyAPI();
            console.log(result);
            return;
        } catch (error) {
            console.log(error);
        }
    }

    console.log("Retries exhausted");
}

retryTesting();