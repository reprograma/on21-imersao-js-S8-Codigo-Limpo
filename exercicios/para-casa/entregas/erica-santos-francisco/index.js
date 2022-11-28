const readline = require("readline-sync");
const { getAllDrinks, getDrinkById } = require("./drinksMachine");

console.clear();

function initial() {
  console.log(
    `====================== Menu ========================
1 - List all drinks
2 - Select drink by Id
3 - Other options
4 - Exit
Enter 1 to 4 to choose an option:`
  );

  const answer = readline.question();
  console.clear();

  switch (answer) {
    case "1":
      getAllDrinks();
      initial();
      break;

    case "2":
      getDrinkById();
      initial();
      break;

    case "3":
      console.log('There are not "other options".');
      initial();
      break;

    case "4":
      console.log("Thanks, come back again!");
      break;

    default:
      console.log(`Unrecognizable ${resposta} option. Try again!`);
      initial();
      break;
  }
}
initial();
