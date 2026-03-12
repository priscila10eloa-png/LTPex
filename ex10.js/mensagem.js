export default class Mensageiro {
  constructor(remetente) {
    this.remetente = remetente;
  }

  enviar(destinatario, mensagem) {
    console.log("De: " + this.remetente);
    console.log("Para: " + destinatario);
    console.log("Mensagem: " + mensagem);
  }
}