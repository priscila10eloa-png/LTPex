export default class ContaBancaria {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }

  depositar(valor) {
    this.saldo = this.saldo + valor;
  }

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo = this.saldo - valor;
    }
  }
}