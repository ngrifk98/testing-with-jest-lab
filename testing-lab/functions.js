// functions.js

// Function that returns the integer 2
function returnTwo() {
    return 2;
  }
  
  // Function that returns a greeting message with the provided name
  function greeting(name) {
    return `Hello, ${name}.`;
  }
  
  // Function that returns the sum of two numbers
  function add(num1, num2) {
    return num1 + num2;
  }

  // Function that returns the product of two numbers
function multiply(num1, num2) {
    return num1 * num2;
  }
  
  // Function that returns the result of dividing num1 by num2
  function divide(num1, num2) {
    if (num2 === 0) {
      throw new Error('Cannot divide by zero.');
    }
    return num1 / num2;
  }
  
  // Function that returns the result of subtracting num2 from num1
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  // Export the functions as an object
  module.exports = {
    returnTwo: returnTwo,
    greeting: greeting,
    add: add,
    multiply: multiply,
  divide: divide,
  subtract: subtract
  };
  
  