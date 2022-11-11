const drinkOptions = require("./drinks.json");
const readline = require("readline-sync");

function question(text) {
  return parseInt(readline.question(text));
}

function showMenu() {
  console.clear();
  console.table(drinkOptions, ["id", "name"]);
  return question(`Qual a sua bebida ?`);
}

function showChosenDrink(id) {
  console.clear();
  const chooseDrink = drinkOptions.find((drinks) => drinks.id === id);
  return console.table(chooseDrink);
}

function backToMenu() {
  const chooseBackToMenu = question(`Deseja fazer outro pedido ?
    1 - Sim
    2 - Não
    `);
  if (chooseBackToMenu === 1) {
    return true;
  } else {
    return false;
  }
}

module.exports = { showMenu, showChosenDrink, backToMenu };
