class Aluno {
  nome;
  curso;

  apresentar() {
    console.log("Olá, meu nome é " + this.nome + " e curso " + this.curso);
  }
}

let aluno1 = new Aluno();
aluno1.nome = "priscila";
aluno1.curso = "Sistemas de Informação";

aluno1.apresentar();