class Pessoa {
  nome;
  horario;

  saudar() {
    if (this.horario < 12) {
      return "Bom dia, " + this.nome + "!";
    } else if (this.horario < 18) {
      return "Boa tarde, " + this.nome + "!";
    } else {
      return "Boa noite, " + this.nome + "!";
    }
  }
}

let p1 = new Pessoa();
p1.nome = "João";
p1.horario = 14;

console.log(p1.saudar());