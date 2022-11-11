class DrinkMachine{
    drinks;
    constructor(){
        this.drinks = [
            { id: 1, name: 'coca-cola', price: 4.5 },
            { id: 2, name: 'água', price: 3 },
            { id: 3, name: 'cerveja', price: 5 },
            { id: 4, name: 'suco de laranja', price: 4 }
        ];
    }

    listDrinks(){
        for(let drink of this.drinks){
            console.log(`${drink.id} - ${drink.name} ---- R$${(drink.price).toFixed(2)}`);
        }
    }

    selectDrink(code){
        let filterElement = this.drinks.findIndex((el) => el.id === code);
        let getName = this.drinks[filterElement].name;
        let getPrice = this.drinks[filterElement].price;

        console.log(`pedido: ${getName} R$${(getPrice.toFixed(2))}`);
    }

    orderConfirmation(value){
        switch(value){
           case 1 :
              console.log('Pedido confirmado, retire sua bebida.')
              break;
           case 2 :
        console.log(`\n**Pedido cancelado**\n
==============================================
Máquina de Bebidas - MENU
==============================================`)
              return this.listDrinks();
              break;
           default:
             console.error('**Operação inválida**');
             return this.listDrinks();
        }  
    }
}

let bebida = new DrinkMachine();
console.log(`
==============================================
Máquina de Bebidas - MENU
==============================================`);

bebida.listDrinks();
console.log("==============================================");

bebida.selectDrink(2);
console.log("\nConfirmar pedido?");
bebida.orderConfirmation(2);

