const Drinks = require('./ClassDrinks');
const prompt = require('prompt-sync')({sigint: true});

let registrationOk = false

function createDrink() {
    while(!registrationOk) {
        let registration = prompt("Quantas bebidas deseja cadastrar?");

        if(registration > 0) {
            for(let i = 0; i < registration; i++) {
                let name = prompt("Digite o nome da bebida.");
                let price = prompt("Digite o preço da bebida.");
                let brand = prompt("Digite a marca da bebida.");
                let flavor = prompt("Digite o sabor da bebida.");

                if(name !== "" && price !== "" && brand !== "" && flavor !== "") {
                    let drink = new Drinks(name, price, brand, flavor);
                } else {
                    return "Não é possivel cadastrar bebidas com campos vazios. Por favor digite todos os campos"
                }
            }
        } else {
            return "Digite um valor válido"
        }
    }
}

function printOutDrinksList() {
    console.log("****************************************************************************")
    console.log("*********************************BEBIDAS************************************")
    console.log("****************************************************************************")

    if(Drinks.drinksList.length > 0) {
        for(let i = 0; i < Drinks.drinksList.length; i++) {
            console.log(`Bebida ${[i]}: ${Drinks.drinksList[i].Name} --- ${Drinks.drinksList[i].Price} --- ${Drinks.drinksList[i].Brand} --- ${Drinks.drinksList[i].Flavor}`)
        }
        console.log("****************************************************************************")
    } else {
        return "Não temos bebidas disponiveis"
    }
}

function getDrinkById(id) {
    console.log("****************************************************************************")
    console.log("*********************************BEBIDAS************************************")
    console.log("****************************************************************************")
    console.log(`Bebida ${id}:
        Nome:`, Drinks.drinksList[id - i].Name,
        `; Preço: `, Drinks.drinksList[id - 1].Price,
        `Marca: `, Drinks.drinksList[id - 1].Brand, 
        `; Sabor: `, Drinks.drinksList[id - 1].Flavor 
    );
}

function deleteDrinkByName(name) {
    let result = Drinks.drinksList.filter(item => { return item.Name != name });
    Drinks.drinksList = [];
    for(let item of result) {
        Drinks.drinksList.push({ "Nome": item.Name, "Preço": item.Price, "Marca": item.Brand, "Flavor": item.Flavor})
    }
    console.log("Bebida deletada!");
}

module.exports = {
    createDrink,
    printOutDrinksList, 
    getDrinkById,
    deleteDrinkByName
}