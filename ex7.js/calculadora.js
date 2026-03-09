class Calculadora {
  num1;
  num2;

  somar() {
    return this.num1 + this.num2;
  }

  subtrair() {
    return this.num1 - this.num2;
  }

  multiplicar() {
    return this.num1 * this.num2;
  }

  dividir() {
    return this.num1 / this.num2;
  }
}

let calc = new Calculadora();
calc.num1 = 10;
calc.num2 = 5;

console.log(calc.somar());
console.log(calc.subtrair());
console.log(calc.multiplicar());
console.log(calc.dividir());