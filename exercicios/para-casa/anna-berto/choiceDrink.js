import drinks from "./drinks";

function listMenuDrink() {
  const listMenu = drinks.map((drink) => {
    return {
      name: drinks.name,
    };
  });
  console.log(listMenu);
}

function drinkDetails() {
  const listDrinkDetails = drinks.map((drinks) => {
    return {
      name: drinks.name,
      price: drinks.price,
      brand: drinks.brand,
      typedrink: drinks.typeDrink,
      flavor: drinks.flavor,
    };
  });
  console.log(listDrinkDetails);
  console.log("Press 0 to return.");

  var input = document.querySelector("#choice");
  var choice = input.value;
  switch (choice) {
    case "0":
      listMenuDrink();
  }
}

choceDrink = () => {
  var input = document.querySelector("#choice");
  var choice = input.value;

  switch (choice) {
    case "1":
      drinkDetails();
    case "2":
      drinkDetails();
    case "3":
      drinkDetails();
    case "4":
      drinkDetails();
    case "5":
      drinkDetails();
    case "6":
      drinkDetails();
    default:
      "We couldn't find this drink, try again";
  }
};
