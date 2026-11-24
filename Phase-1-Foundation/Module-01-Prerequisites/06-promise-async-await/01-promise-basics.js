// Promise States
// Pending: Initial state, not fulfilled or rejected.
// Fulfilled: Operation completed successfully.
// Rejected: Operation failed.  

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = false; // Change this to true to test rejection
        if (success) {
            resolve('Promise resolved successfully!');
        } else {
            reject('Promise rejected!');
        }
    }, 1000);
});

// Consume with .then() and .catch() and .finally()
promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log('Promise has been settled (either fulfilled or rejected).');
    });