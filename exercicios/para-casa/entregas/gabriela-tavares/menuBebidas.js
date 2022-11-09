const prompt = require("Prompt-sync");

let teclado = prompt();
let option = 0;

const listaBebidas = [
  { nome: "Coca-cola", preco: 4.5, marca: "coca", sabor: "coca" },
  { nome: "Fanta", preco: 4.5, marca: "coca", sabor: "laranja" },
  { nome: "Guarana-Antartica", preco: 4.5, marca: "coca", sabor: "guaraná" },
  { nome: "Agua", preco: 2.5, marca: "lindoya", sabor: "natual" },
  { nome: "Del Valle Uva ", preco: 6.89, marca: "delValle", sabor: "uva" },
  {
    nome: "Del Valle Laranja ",
    preco: 6.89,
    marca: "delValle",
    sabor: "laranja",
  },
  { nome: "Del Valle Limao ", preco: 6.89, marca: "delValle", sabor: "limao" },
];

function escolhaBebida(nomeBebida) {
  if (nomeBebida === "Coca-cola") {
    return listaBebidas[0];
  } else if (nomeBebida === "Fanta") {
    return listaBebidas[1];
  } else if (nomeBebida === "Guarana-Antartica") {
    return listaBebidas[2];
  } else if (nomeBebida === "Agua") {
    return listaBebidas[3];
  } else if (nomeBebida === "Del Valle Uva") {
    return listaBebidas[4];
  } else if (nomeBebida === "Del Valle Laranja") {
    return listaBebidas[5];
  } else if (nomeBebida === "Del Valle Limao") {
    return listaBebidas[6];
  } else {
    throw Error("Essa bebida não existe na lista!");
  }
}

function menuBebida() {
  while (option != 3) {
    console.log("+================= Bebidas =================+");
    console.log("|1. Lista de bebidas                        |");
    console.log("|2. Digite o nome da bebida escolhida:      |");
    console.log("|3. Sair do Menu                                   |");
    console.log("+===========================================+");

    option = +teclado("Escolha uma opção: -->  ");

    switch (option) {
      case 1:
        const listBebida = listaBebidas
          .filter((bebidasList) => bebidasList.nome)
          .map((bebidasList) => bebidasList.nome);
        console.table(listBebida);

        break;

      case 2:
        const optionBebida = teclado("Qual a bebida?: -->  ");
        console.table(escolhaBebida(optionBebida));

        break;
      case 3:
        console.log("Você saiu!.");

        break;

      default:
        console.log("Favor escolher um número de 1 à 3!");
        break;
    }
  }

  return menuBebida;
}

menuBebida();
