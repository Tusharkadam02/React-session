// Interpolation with ${}
const name = "Alice";
const age = 30;
console.log("My name is " + name + " and I am " + age + " years old."); // Traditional concatenation Output: My name is Alice and I am 30 years old.
console.log(`My name is ${name} and I am ${age} years old.`); // Template literal Output: My name is Alice and I am 30 years old.

// Expressions
const amount = 1000;
const discount = 0.1; // 10/100
console.log(`The discounted price is ${amount - (amount * discount)}.`); // Output: The discounted price is 900.

// Multiline strings
const message = `Hello,
This is a multiline
string using template literals.`;
console.log(message); // Output: Hello, This is a multiline string using template literals.

// Ternary operator
const isLoggedIn = true;
const greeting = `Hello, ${isLoggedIn ? "User" : "Guest"}!`;
console.log(greeting); // Output: Hello, User!