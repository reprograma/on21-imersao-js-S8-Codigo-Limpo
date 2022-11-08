const readline = require("readline-sync");
const { listAllDrinks } = require('./listAllDrinks.js')
const { listDrinkById } = require('./listDrinkById.js')

const drinksMenu = () => {
  console.log(`+------------+ Drink Machine Menu +------------+
  1 - List all available drinks
  2 - See drink details by index
  3 - Exit
  Choose an option between 1 and 3:
  `);
  const answer = readline.question();

  console.clear();

  switch (answer) {
    case "1":
      listAllDrinks();
      drinksMenu();
      break;

    case "2":
      listDrinkById();
      drinksMenu();
      break;

    case "3":
      console.log("Thank you, come back soon!\n");
      break;

    default:
      console.log(`You choose ${answer}. Invalid Option. Please try again!\n`);
      drinksMenu();
      break;
  }
}

drinksMenu();