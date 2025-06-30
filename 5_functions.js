// Function declaration
function add(a, b) {
  return a + b;
}
console.log("Sum is:", add(3, 7));

// Function expression
const square = function (n) {
  return n * n;
};
console.log("Square is:", square(4));

// Arrow function
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Yash"));