const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const bebidas = [
  { nome: "Água", preco: 2, marca: "Minalba", sabor: "Sem gás" },
  { nome: "Água", preco: 2.5, marca: "Minalba", sabor: "Com gás" },
  { nome: "Refrigerante", preco: 6, marca: "Ambev", sabor: "Guaraná" },
  { nome: "Refrigerante", preco: 6, marca: "Coca", sabor: "Coca-cola" },
  { nome: "Refrigerante", preco: 6, marca: "Coca", sabor: "Fanta uva" },
];

const iniciarMenu = (bebidas) => {
  console.log("Segue abaixo a lista de bebidas disponíveis.");
  console.table(bebidas);
  rl.question("Adicione o index da bebida escolhida: ", (indexBebida) => {
    console.log(bebidas[indexBebida]);
    rl.question(
      "Aperte 9 para voltar ao menu inicial ou 0 para sair. ",
      (numeroResposta) => {
        if (numeroResposta === "9") {
          iniciarMenu(bebidas);
        }
        if (numeroResposta === "0") {
          rl.close();
        }
      }
    );
  });
};

iniciarMenu(bebidas);
