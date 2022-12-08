const machineItems = require('./machineItems');

class Item {
    name;
    netWeight;
    price;
    amount


    constructor(name, netWeight, price, amount) {
      this.name = name;
      this.netWeight = netWeight;
      this.price = price;
      this.amount= amount;
  };
};

function addDrink  (drinkName, value) {
  let menuItem = machineItems.find(machineItems => machineItems.name === drinkName);
  let newAmount = menuItem.amount += value;
  console.log(menuItem);
  return 'drinks added successfully'
};
console.log(addDrink('natural one maçã', 1));

module.exports = Item;