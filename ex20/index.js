import Pessoa from "./pessoa.js";

const pessoa = new Pessoa("Lucas", 20);

console.log(`${pessoa.nome} tem ${pessoa.idadeEmDias()} dias de vida`);