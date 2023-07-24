// functions.test.js

// Require the functions.js file
const functions = require('./functions');

// Test for returnTwo function
test('returnTwo should return 2', () => {
  expect(functions.returnTwo()).toBe(2);
});

// Test for greeting function
test('greeting should return "Hello, name."', () => {
  expect(functions.greeting('James')).toBe('Hello, James.');
  expect(functions.greeting('Jill')).toBe('Hello, Jill.');
});

// Test for add function
test('add should return the sum of two numbers', () => {
  expect(functions.add(1, 2)).toBe(3);
  expect(functions.add(5, 9)).toBe(14);
});

describe('Math functions', () => {
    // Test for multiply function
    test('multiply should return the product of two numbers', () => {
      expect(functions.multiply(2, 3)).toBe(6);
      expect(functions.multiply(-5, 4)).toBe(-20);
    });
  
    // Test for divide function
    test('divide should return the result of dividing num1 by num2', () => {
      expect(functions.divide(10, 2)).toBe(5);
      expect(functions.divide(6, 3)).toBe(2);
    });
  
    // Test for divide function with zero as the divisor
    test('divide should throw an error if the divisor is zero', () => {
      expect(() => functions.divide(8, 0)).toThrow('Cannot divide by zero.');
    });
  
    // Test for subtract function
    test('subtract should return the result of subtracting num2 from num1', () => {
      expect(functions.subtract(10, 4)).toBe(6);
      expect(functions.subtract(5, 9)).toBe(-4);
    });
  });