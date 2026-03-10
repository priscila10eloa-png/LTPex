class ContaBancaria {
  titular;
  saldo = 0;

  depositar(valor) {
    this.saldo = this.saldo + valor;
  }

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo = this.saldo - valor;
    }
  }
}

let conta = new ContaBancaria();
conta.titular = "pri"

conta.depositar(500);
conta.sacar(200);

console.log("Saldo: " + conta.saldo);