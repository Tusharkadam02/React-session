const rgb = [255, 200, 0];

console.log(rgb[0]); // 255
console.log(rgb[1]); // 200
console.log(rgb[2]); // 0   

// Basic array destructuring
// const [red, green, blue] = rgb;
// console.log("red", red); // Output: 255
// console.log("green", green); // Output: 200
// console.log("blue", blue); // Output: 0

// Skipping elements during destructuring
// const [,,blue] = rgb;
// console.log("blue", blue); // Output: 0

// Rest
// const [red, ...otherColors] = rgb;
// console.log("red", red); // Output: 255
// console.log("otherColors", otherColors); // Output: [200, 0]

// Default values during destructuring
// const [red, green, blue, alpha = 1] = rgb;
// console.log("red", red); // Output: 255
// console.log("green", green); // Output: 200
// console.log("blue", blue);  // Output: 0
// console.log("alpha", alpha); // Output: 1

// Swapping variables using destructuring
let a = 1;
let b = 2;
console.log("Before swapping: a =", a, ", b =", b); // Output: Before swapping: a = 1 , b = 2
[a, b] = [b, a];
console.log("After swapping: a =", a, ", b =", b); // Output: After swapping: a = 2 , b = 1