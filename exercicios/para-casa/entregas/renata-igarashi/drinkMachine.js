const selectDrink = require('./selectDrink')
const rl = require('readline-sync')
const drinksList = require('./drinkList')

function drinkMachine() {
        
    console.log(`Select one option\n1 - List all drinks\n2 - Select one drink to see details\n3 - Exit`);
    let optionSelect = rl.question()
    
    switch (optionSelect) {
        case '1':
        console.table(drinksList, ['name'])
            console.log('Press enter to return')
            rl.question()
            console.clear()
            drinkMachine()
            break
        case '2':
            selectDrink.selectDrink()
            drinkMachine()
            break;
        case '3':
            console.log(`Thank you, see you soon!`)
        break
            default:
            console.log(`Invalid option, please try again`)
            drinkMachine()
            break;
    }
}

drinkMachine()