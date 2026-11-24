const rgb = [255, 200, 0];
console.log(rgb[0]); // Output: 255
console.log(rgb[1]); // Output: 200
console.log(rgb[2]); // Output: 0

// Basic array destructuring
const [red, green, blue] = rgb;
console.log("red", red); // Output: 255
console.log("green", green); // Output: 200
console.log("blue", blue); // Output: 0

// Skipping elements during destructuring
// const [, , blue] = rgb;
// console.log("blue", blue); // Output: 0

// Using rest operator to collect remaining elements
// const [red, ...otherColors] = rgb;
// console.log("red", red); // Output: 255
// console.log("otherColors", otherColors); // Output: [200, 0]

// // Default values (only when the element is undefined)
// const [red, green, blue, alpha = 1] = rgb;
// console.log("red", red); // Output: 255
// console.log("green", green); // Output: 200
// console.log("blue", blue); // Output: 0
// console.log("alpha", alpha); // Output: 1 (default value used)

// Swapping values

let a = 1;
let b = 2;
console.log("Before swapping: a =", a, ", b =", b); // Output: Before swapping: a = 1 , b = 2
[a, b] = [b, a];
console.log("After swapping: a =", a, ", b =", b); // Output: After swapping: a = 2 , b = 1