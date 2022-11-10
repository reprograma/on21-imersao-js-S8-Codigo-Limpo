const readline = require("readline");
const interface = readline.createInterface(process.stdin, process.stdout);

const drinks = [
  {
    id: 1,
    name: "Suco",
    taste: "Uva",
    price: 8.5,
    brand: "Fresh",
  },
  {
    id: 2,
    name: "Água",
    taste: "Com gás",
    price: 3.0,
    brand: "Bonafont",
  },
  {
    id: 3,
    name: "Toddynho",
    taste: "Chocolate",
    price: 2.99,
    brand: "Nestlé",
  },
  {
    id: 4,
    name: "Chá",
    taste: "Camomila",
    price: 4.0,
    brand: "Leão",
  },
  {
    id: 5,
    name: "Chamyto",
    taste: "Leite Fermentado",
    price: 2.3,
    brand: "Nestlé",
  },
];

function initialMenu() {
  console.log(
    "---------------MÁQUINA DE DRINKS---------------\n[1] Ver opções\n[2] Encerrar"
  );

  interface.question("Escolha uma das opções:", (response) => {
    switch (response) {
      case "1":
        listDrinks();
        break;
      case "2":
        console.log("Pedido encerrado.");
        break;
      default:
        console.log("Opção Inválida. Digite novamente.");
        initialMenu();
    }
  });
}

function listDrinks() {
  let menuDrinks = "";
  for (i = 0; i <= drinks.length; i++) {
    if (i < drinks.length) {
      menuDrinks += `[${i + 1}] ${drinks[i].name}\n`;
    } else menuDrinks += `[0] Voltar \n`;
  }

  console.log(menuDrinks);
  interface.question("Escolha uma das opções:", (response) => {
    response != 0 ? openInfoDrink(response) : initialMenu();
  });
}

function openInfoDrink(response) {
  const drinkSelected = response - 1;

  console.log(
    `${drinks[drinkSelected].name} - R$${drinks[drinkSelected].price} - ${drinks[drinkSelected].taste} - ${drinks[drinkSelected].brand}`
  );
  console.log(`[1] Comprar\n[2] Voltar`);
  interface.question("Digite a opção: ", (op) => {
    if (op === "1") {
      console.log("Produto selecionado :)");
      initialMenu();
    } else if (op === "2") {
      listDrinks();
    } else {
      console.log("opção inválida.")
      openInfoDrink(drinkSelected)
    }
  });
}

initialMenu();
