const Drinks = require('./ClassDrinks')
const prompt = require('prompt-sync')

let out = false
let registrationOk = false

function postDrink() {
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

module.exports = {
    postDrink
}