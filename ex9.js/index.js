import ContaBancaria from "./banco.js";

const conta = new ContaBancaria("Pri");

conta.depositar(500);
conta.sacar(200);

console.log("Saldo: " + conta.saldo);