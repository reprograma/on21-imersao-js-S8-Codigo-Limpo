const readline = require('readline-sync')
const { drinksList } = require("./drinksList.js");

const listAllDrinks = () => {
  console.table(drinksList.map(drink => `${drink.name}`))
  console.log("Press Enter to go back.");
  readline.question();
}

module.exports = {
  listAllDrinks
}