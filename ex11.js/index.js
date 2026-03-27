import Operacoes from "./operacoes.js";

const op = new Operacoes();

console.log(`20 + 5 = ${op.calcular(20, 5, "soma")}`);
console.log(`20 - 5 = ${op.calcular(20, 5, "subtrai")}`);
console.log(`20 * 5 = ${op.calcular(20, 5, "multiplica")}`);
console.log(`20 / 5 = ${op.calcular(20, 5, "divide")}`);