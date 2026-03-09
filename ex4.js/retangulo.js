class retangulo{
base;
altura;

calculararea(){
     return this.base * this.altura;
  }
}

let r1 = new retangulo();
r1.base = 5;
r1.altura = 4;

console.log("Área: " + r1.calculararea());
