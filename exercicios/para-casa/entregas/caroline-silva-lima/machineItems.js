const Item = require('./Item');

const machineItems = [
   {
       'name':'coca-cola',
       'netWeight': 350,
       'price': 5,
       'amount': 10
   },
   {
        'name':'natural one laranja',
        'netWeight': 350,
        'price': 6,
        'amount': 6
    },  
   {
        'name':'guarana',
        'netWeight': 350,
        'price': 5,
        'amount': 9
    },
    {
        'name':'ice tea',
        'netWeight': 350,
        'price': 5,
        'amount': 6
    },
    {
        'name':'natural one uva',
        'netWeight': 350,
        'price': 6,
        'amount': 5
    },
    {
        'name':'natural one maçã',
        'netWeight': 350,
        'price': 6,
        'amount': 6
    },
];

function itemSearch (drinkName, value) {
    let menuItem = machineItems.find(machineItems => machineItems.name === drinkName);
    console.log(menuItem);
    menuItem.amount = menuItem.amount += value;
    return 'drinks added successfully'
};

module.exports = machineItems;
