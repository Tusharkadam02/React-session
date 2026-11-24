// Defaul Parameters

function multiply(a, b = 1) {
  console.log(a, b);
  return a * b;
}

console.log(multiply(5)); // Output: 5 (b defaults to 1)
console.log(multiply(5, 2)); // Output: 10 (b is provided as 2)


// Rest Parameters

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
// console.log(sum(1, 2, 3)); // Output: 6
// console.log(sum(1, 2, 3, 4, 5)); // Output: 15

function greet(greeting, name, ...names) {
    console.log("greeting", greeting);
    console.log("name", name);
    console.log("names", names);
    return `${greeting} ${name} and ${names.join(", ")}`;
}

console.log(greet("Hello", "Good Morning", "Bob", "Charlie")); // Output: Hello Good Morning and Bob, Charlie