import Aluno from "./aluno.js";

const aluno = new Aluno("Priscila");

const media = aluno.calcularMedia(7, 8, 9);

console.log(`Média: ${media}`);