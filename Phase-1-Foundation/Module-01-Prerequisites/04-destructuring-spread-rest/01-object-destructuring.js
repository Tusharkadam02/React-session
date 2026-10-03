const user = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA",
    },
    role: "admin"
}

console.log("age dot notation", user.age);
console.log("age bracket notation", user["age"]);

// Basic object destructuring

const { name, age, address } = user;
console.log("name", name); // Output: John Doe
console.log("age", age); // Output: 30
console.log("address", address); // Output: { street: '123 Main St', city: 'Anytown', country: 'USA' }

// Nested object destructuring
const { 
    address: { street, city, country },
} = user;
console.log("street", street); // Output: 123 Main St
console.log("city", city); // Output: Anytown
console.log("country", country); // Output: USA

// Renaming variables during destructuring
const { name: userName, age: userAge } = user;
console.log("userName", userName); // Output: John Doe
console.log("userAge", userAge); // Output: 30

// Default values during destructuring
const { role = "guest", verified = false } = user;
console.log("role", role); // Output: guest
console.log("verified", verified); // Output: false

// Function parameter destructuring
function displayUserInfo({ name, age, address: { street, city, country } }) {
 return `Name: ${name}, Age: ${age}, Address: ${street}, ${city}, ${country}`;
}
console.log(displayUserInfo(user)); // Output: Name: John Doe, Age: 30, Address: 123 Main St, Anytown, USA