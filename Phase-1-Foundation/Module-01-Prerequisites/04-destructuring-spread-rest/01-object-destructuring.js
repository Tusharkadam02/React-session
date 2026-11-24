const user = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
};

console.log("age dot notation", user.age); // Accessing age using dot notation // Output: 30
console.log("age bracket notation", user['age']); // Accessing age using bracket notation // Output: 30

// Basic object destructuring
const { name, age, address } = user;
console.log("name", name); // Output: John Doe
console.log("age", age); // Output: 30
console.log("address", address); // Output: { street: '123 Main St', city: 'Anytown', country: 'USA' }

// Nested object destructuring
const { address: { street, city, country } } = user;
console.log("street", street); // Output: 123 Main St
console.log("city", city); // Output: Anytown
console.log("country", country); // Output: USA 

// Renaming variables during destructuring
// Rename property 'name' to 'newName'
const { name: newName } = user;
console.log("newName", newName); // Output: John Doe
console.log("name", name); // Output: John Doe (original variable remains unchanged)

// Default values (user only when the property is undefined)
const { role = "guest" , verified = false } = user;
console.log("role", role); // Output: guest (default value used)
console.log("verified", verified); // Output: false (default value used)

// Function parameter destructuring
function displayUserInfo({ name, age, address: { street, city, country } }) {
    return `Name: ${name}, Age: ${age}, Street: ${street}, City: ${city}, Country: ${country}`;
}
console.log(displayUserInfo(user)); // Output: Name: John Doe, Age: 30, Street: 123 Main St, City: Anytown, Country: USA