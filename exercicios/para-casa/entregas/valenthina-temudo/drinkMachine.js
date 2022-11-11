const drinks = require("./drinks.js");
const readline = require("readline-sync");

function listDrinks() {
  const list = drinks.map((drink) => {
    return {
      id: drink.id,
      name: drink.name,
      price: drink.price,
      brand: drink.brand,
      flavor: drink.flavor,
    };
  });
  console.table(list);
  console.log("Press enter to return.");
  readline.question();
  console.clear();
}

const getDrink = () => {
  console.log("Which drink you want?");
  const chooseDrink = readline.question();

  const drink = drinks.find((drink) => drink.id == chooseDrink);
  if (drink) {
    console.table("Drink:" + chooseDrink);
    console.log("Press enter to return.");
    readline.question();
    console.clear();
  } else {
    console.log("Don't have that drink");
  }
};

function drinkMachine() {
  console.log(
    `======================== Drink Machine ========================
    1 - List Drinks
    2 - Choose Drink
    3 - Exit
    `
  );

  const answer = readline.question();
  console.clear();

  switch (answer) {
    case "1":
      listDrinks();
      drinkMachine();
      break;
    case "2":
      getDrink();
      drinkMachine();
      break;
    case "3":
      console.log("Thank you!");
      break;
    default:
      console.log("Try again");
      break;
  }
}

drinkMachine();
