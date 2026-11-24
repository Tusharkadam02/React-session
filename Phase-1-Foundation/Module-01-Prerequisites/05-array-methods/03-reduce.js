const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 0 is the initial value for the accumulator
console.log(sum); // Output: 15

const cart = [
    { id: 1, name: "Laptop", price: 1000, quantity: 1 },
    { id: 2, name: "Phone", price: 500, quantity: 2 },
    { id: 3, name: "Tablet", price: 800, quantity: 3 }
];

const totalPrice = cart.reduce((accumulator, item) => {
    return accumulator + (item.price * item.quantity);
}, 0); // 0 is the initial value for the accumulator
console.log(totalPrice); // Output: 4900