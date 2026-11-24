// import { PI, square } from './utilities.js'; // Named imports
// import cube from './utilities.js'; // Default import

import cube, { PI, square } from './utilities.js'; // Mixed imports

console.log('PI:', PI); // Output: PI: 3.14159
console.log('Square of 4:', square(4)); // Output: Square of 4: 16
console.log('Cube of 3:', cube(3)); // Output: Cube of 3: 27