// Promise States
// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: Operation completed successfully.
// Rejected: Operation failed.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true; // Change this to false to test rejection
        if(success) {
            resolve("Promise fulfilled successfully!");
        } else {
            reject("Promise rejected due to an error.");
        }
    }, 2000);
});

// Consume with .then .catch .finally

promise
.then((message) => {
    console.log(message); // Output: Promise fulfilled successfully!
})
.catch((error) => {
    console.error(error); // Output: Promise rejected due to an error.
})
.finally(() => {
    console.log("Promise has been settled (either fulfilled or rejected).");
});