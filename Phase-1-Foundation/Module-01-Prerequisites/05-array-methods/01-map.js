const numbers = [1, 2, 3, 4, 5];

const result = numbers.map((number, index, arr) => {
  return `Index: ${index}, Value: ${number}, Array: ${arr}`;
});
console.log(result); // Output: ["Index: 0, Value: 1, Array: 1,2,3,4,5", "Index: 1, Value: 2, Array: 1,2,3,4,5", "Index: 2, Value: 3, Array: 1,2,3,4,5", "Index: 3, Value: 4, Array: 1,2,3,4,5", "Index: 4, Value: 5, Array: 1,2,3,4,5"]

// basic transformation
const sqruaredNumbers = numbers.map(number => number * number);
console.log(sqruaredNumbers); // Output: [1, 4, 9, 16, 25]

// transform with array of objects
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
const userNames = users.map(user => user.name.toUpperCase());
console.log(userNames); // Output: ["ALICE", "BOB", "CHARLIE"]

// list items
const listItems = users.map(user => `<li>${user.name} (${user.age})</li>`);
console.log(listItems); // Output: ["<li>Alice (25)</li>", "<li>Bob (30)</li>", "<li>Charlie (35)</li>"]

// In react JSX

{
    /* <ul>
        {users.map(user => (
            <li key={user.name}>{user.name} ({user.age})</li>
        ))}
    </ul> */
}

// forEact vs map
const resultForEach = numbers.forEach((num) => num * num);
console.log(resultForEach); // Output: undefined (forEach does not return a new array, it returns undefined)