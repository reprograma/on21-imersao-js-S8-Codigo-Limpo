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

function itemSearch (drinkName, value) {
  let menuItem = machineItems.find(machineItems => machineItems.name === drinkName);
  menuItem.amount = menuItem.amount += value;
  console.log(menuItem);
  return 'drinks added successfully'
};
console.log(itemSearch('natural one maçã', 2));

module.exports = Item;