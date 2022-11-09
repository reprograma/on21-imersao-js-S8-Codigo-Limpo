const drinksList = require('./drinkList')
const rl = require('readline-sync')


function selectDrink() {
    
    console.table(drinksList, ['name'])
    console.log('Select one drink: ')

    let drinkToSelect = rl.question()

    const selectedDrink = drinksList.find(drink => drink.id === drinkToSelect)

    if(selectedDrink){
        console.table(selectedDrink)
    } else {
        console.log('Invalid drink option, press enter and try again!\n')
        rl.question()
        console.clear()
        selectDrink()
    }

    console.log('Press enter to return')
    rl.question()
    console.clear()
}

module.exports = { selectDrink }