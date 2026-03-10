class Mensageiro {
  remetente;

  enviar(destinatario, mensagem) {
    console.log("De: " + this.remetente);
    console.log("Para: " + destinatario);
    console.log("Mensagem: " + mensagem);
  }
}

let m1 = new Mensageiro();
m1.remetente = "priscila"

m1.enviar("João", "Olá, tudo bem?");