// Objects

const props = {
    variant: "primary",
    size: "large",
    disabled: false,
    onClick: () => console.log("Button clicked"),
};

const { variant, size, ...otherProps } = props;

console.log("variant", variant); // Output: primary
console.log("size", size); // Output: large
console.log("otherProps", otherProps); // Output: { disabled: false, onClick: [Function: onClick] }

// React use case example
// function Button({ variant, size, ...restProps }) {
//     return <button variant={variant} size={size} {...restProps} />;
// }

// functions

function greet(greeting, name, ...names){
    console.log("greeting", greeting); 
    console.log("name", name); 
    console.log("names", names);
    return `${greeting} ${name}, ${names.join(", ")}`;
}
console.log(greet("Hello", "Good Morning", "Bob", "Charlie")); // Output: Hello Good Morning, Bob, Charlie

// arrays
const [red, ...otherColors] = rgb;
console.log("red", red); // Output: 255
console.log("otherColors", otherColors); // Output: [200, 0]
