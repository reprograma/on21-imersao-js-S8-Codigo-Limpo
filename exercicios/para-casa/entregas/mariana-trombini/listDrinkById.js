const readline = require("readline-sync");
const { drinksList } = require("./drinksList.js");

const listDrinkById = () => {
  console.log("Which drink do you want to see the details?");
  const chosenDrink = readline.question();

  const filteredDrink = drinksList.find(drink => drink.id === chosenDrink);
  filteredDrink ? console.table(filteredDrink) : console.log('Drink not found!');

  console.log("Press enter to go back.");
  readline.question();
  console.clear();
}

module.exports = {
  listDrinkById
}