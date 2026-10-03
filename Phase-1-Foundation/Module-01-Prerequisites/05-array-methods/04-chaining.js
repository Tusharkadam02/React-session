const order = [
    {id: 1, name: "Laptop", price: 1000, quantity: 2, status: "paid"},
    {id: 2, name: "Phone", price: 500, quantity: 1, status: "pending"},
    {id: 3, name: "Tablet", price: 800, quantity: 3, status: "paid"},
    {id: 4, name: "Monitor", price: 300, quantity: 1, status: "pending"},
]

// calculate paid order total cost
const paidOrderTotalCost = order
    .filter(item => item.status === "paid") // filter paid orders
    .reduce((total, item) => total + item.price * item.quantity, 0); // calculate total cost of paid orders
    console.log("Total cost of paid orders: ", paidOrderTotalCost); // Output: 4400

function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log(titleCase("hello world")); // Output: "Hello World"
