// 1. Named exports (can have many named exports in a file)
export const PI = 3.14159;
export function square(x) {
  return x * x;
}

// 2. Default export (can have only one default export in a file)
export default function cube(x) {
    return x * x * x;
}   