class Produto {
  nome;
  preco;

  estaCaro() {
    return this.preco > 100;
  }
}

let p1 = new Produto();
p1.nome = "Caderno";
p1.preco = 101;

console.log(p1.estaCaro());