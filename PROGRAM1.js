class Calculator {
  constructor(a, b, operation) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.operation = operation.toLowerCase();
  }

  calculate() {
    switch (this.operation) {
      case "add":
        return this.a + this.b;
      case "subtract":
        return this.a - this.b;
      case "multiply":
        return this.a * this.b;
      case "divide":
        return this.b === 0 ? "Error: Division by zero" : this.a / this.b;
      default:
        return "Error: Invalid operation";
    }
  }
}

// Example inputs
const a = 10;
const b = 5;
const operations = ["add", "subtract", "multiply", "divide"];

for (const operation of operations) {
  const calc = new Calculator(a, b, operation);
  const result = calc.calculate();
  console.log(`Operation: ${operation} => Result: ${result}`);
}

//THE OUTPUT OF THIS IS//

Operation: add => Result: 15
Operation: subtract => Result: 5
Operation: multiply => Result: 50
Operation: divide => Result: 2
