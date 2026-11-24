const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const products = [
    {id: 1, name: "Laptop", price: 1000, inStock: true},
    {id: 2, name: "Phone", price: 500, inStock: false},
    {id: 3, name: "Tablet", price: 300, inStock: true},
    {id: 4, name: "Monitor", price: 200, inStock: false},
    {id: 5, name: "Keyboard", price: 50, inStock: true}
];

// filter
// const test = numbers.filter((num) => num % 2 === 0);

console.log("Filtered even numbers:", 
    numbers.filter((num) => num % 2 === 0)
); // Output: [2, 4, 6, 8, 10]

console.log(products.filter((product) => product.inStock)); // Output: [{id: 1, name: "Laptop", price: 1000, inStock: true}, {id: 3, name: "Tablet", price: 300, inStock: true}, {id: 5, name: "Keyboard", price: 50, inStock: true}]

// find (single element)
console.log(numbers.find((num) => num % 2 === 0)); // Output: 2
console.log(products.find((product) => product.price > 100)); // Output: {id: 1, name: "Laptop", price: 1000, inStock: true}

// findIndex (index of the first element that satisfies the condition)
console.log(numbers.findIndex((num) => num % 2 === 0)); // Output: 1
console.log(products.findIndex((product) => product.price > 100)); // Output: 0

// some (at least one element satisfies the condition)
console.log(numbers.some((num) => num % 2 === 0)); // Output: true
console.log(products.some((product) => product.price > 100)); // Output: true

// every (all elements satisfy the condition)
console.log(numbers.every((num) => num % 2 === 0)); // Output: false
console.log(products.every((product) => product.price > 10)); // Output: true
