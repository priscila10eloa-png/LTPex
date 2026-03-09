class Cachorro {
  nome;
  raca;

  latir() {
    console.log("Au au!");
  }
}

let cachorro1 = new Cachorro();
cachorro1.nome = "Rex";
cachorro1.raca = "Vira-lata";

cachorro1.latir();