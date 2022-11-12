const { createDrink, printOutDrinksList, getDrinkById, deleteDrinkByName } = require('./drinksMachine')
const prompt = require('prompt-sync')({sigint: true});

let out = false;

do {
    let option = prompt("\n ** MENU ** \n Digite uma opção: \n 1 - Cadastrar; \n 2 - Listar bebidas; \n 3 - Pegar bebida; \n 4 - Deletar bebida;\n 5 - Sair \n");
    switch (option) {
        case "1":createDrink(); 
        break;
        case "2": printOutDrinksList(); 
        break;
        case "3": {
            let id = prompt("Digite o número da bebida selecionada.");
            getDrinkById(id);
        }; break;
        case "4": {
            let nameDrinks = prompt("Digite o nome da bebida que deseja deletar.");
            deleteDrinkByName(nameDrinks); 
        }; break;
        case "5": out = true; 
        break;
        default: console.log("Ops! Opção inválida!");
    }
    
} while (!out);