const { showMenu, showChosenDrink, backToMenu} = require("./showDrinks");
let anotherOrder;

do {
  showChosenDrink(showMenu());
  anotherOrder = backToMenu()
} while (anotherOrder);
