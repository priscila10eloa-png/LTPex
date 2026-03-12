export default class Contador {
  constructor() {
    this.valor = 0;
  }

  incrementar() {
    this.valor++;
  }

  mostrar() {
    console.log("Valor atual: " + this.valor);
  }
}