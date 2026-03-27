import Produto from "./produto.js";

const produto = new Produto("Camiseta", 100);

produto.aplicarDesconto(20);

console.log(`Novo preço: R$ ${produto.preco}`);