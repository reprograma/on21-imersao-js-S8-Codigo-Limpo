const database = require("./database.json");
const readline = require("readline-sync");

function getAllDrinks() {
  const listAll = database.map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      brand: item.brand,
      taste: item.taste,
    };
  });

  console.table(listAll);
  console.log(`\nPress enter to return`);
  readline.question();
  console.clear();
}

function getDrinkById() {
  console.log("Which product would you like to choose?");
  const idDrinkSelected = readline.question();
  const listId = database.find((item) => item.id == idDrinkSelected);
  if (!listId) {
    return console.log(`Sorry, we don't have this drink registered.`);
  } else {
    console.log("Selected drink:" + idDrinkSelected);
    console.table(listId);
    console.log(`\nPress enter to return`);
    readline.question();
    console.clear();
  }
}

module.exports = {
  getAllDrinks,
  getDrinkById,
};
