const order = [
    {id: 1, name: "Laptop", price: 1000, quantity: 2, status: "paid"},
    {id: 2, name: "Phone", price: 500, quantity: 1, status: "pending"},
    {id: 3, name: "Tablet", price: 300, quantity: 3, status: "paid"},
    {id: 4, name: "Monitor", price: 200, quantity: 1, status: "pending"},
    {id: 5, name: "Keyboard", price: 50, quantity: 5, status: "paid"}
]

// calculate total price of paid items
const totalPaidPrice = order
    .filter(item => item.status === "paid") // filter only paid items
    .reduce((total, item) => total + (item.price * item.quantity), 0); // calculate total cost of paid items
console.log(totalPaidPrice); // Output: 4900