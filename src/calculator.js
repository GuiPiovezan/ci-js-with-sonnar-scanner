function calculator(operator, a, b) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      return a / b;
    case '%':
      return a % b;
    default:
      throw new Error('Invalid operator. Supported operators are: +, -, *, /.');
  }
}

module.exports = calculator;