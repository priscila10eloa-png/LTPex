class Contador {
  valor = 0;

  incrementar() {
    this.valor++;
  }

  mostrar() {
    console.log("Valor atual: " + this.valor);
  }
}

let c1 = new Contador();

c1.incrementar();
c1.incrementar();
c1.incrementar();
c1.incrementar();

c1.mostrar();