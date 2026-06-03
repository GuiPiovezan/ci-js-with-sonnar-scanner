const calculator = require('./calculator');

describe('Calculator', () => {
  test('should add two numbers correctly', () => {
    expect(calculator('+', 2, 3)).toBe(5);
  });

  test('should subtract two numbers correctly', () => {
    expect(calculator('-', 5, 2)).toBe(3);
  });

  test('should multiply two numbers correctly', () => {
    expect(calculator('*', 4, 3)).toBe(12);
  });

  test('should divide two numbers correctly', () => {
    expect(calculator('/', 10, 2)).toBe(5);
  });

  test('should throw an error for division by zero', () => {
    expect(() => calculator('/', 10, 0)).toThrow('Division by zero is not allowed.');
  });

  test('should throw an error for invalid operator', () => {
    expect(() => calculator('**', 10, 5)).toThrow('Invalid operator. Supported operators are: +, -, *, /, %.');
  });
});