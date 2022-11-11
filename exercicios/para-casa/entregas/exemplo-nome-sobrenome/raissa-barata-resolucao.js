class listofDrinks {
    drink = new Array;
    constructor() {
       this.drink = [
          { id: 1, name: 'Coca Cola', price: 8,brand: 'coca-cola', flavor:'hbo' },
          { id: 2, name: 'Guaraná Natural', price: 8,brand: 'coca-cola', flavor:'hbo' },
          { id: 3, name: 'Cerveja', price: 8,brand: 'coca-cola', flavor:'hbo' },
          { id: 4, name: 'Água', price: 8, brand: 'coca-cola', flavor:'hbo' }];
    }
    listDrinks() {
       for (let drink of this.drink) {
         return drink;
       }
    }
    getdrink(code) {
       const drinkselect = this.drink.findIndex((b) => b.id === code);
       const nameDrink = this.drink[drinkselect].name;
       const priceDrink = this.drink[drinkselect].price;
       
     }
       
     confirmedrink(value){
       switch(value){
          case 1 :
             console.log('Bebida confirmada.')
             console.log('---');
             return this.listDrinks();
             break;
          case 2 :
             console.log('Bebida cancelada.')
             return this.listDrinks();
             break;
          default:
            console.error('Operação inválida');
       }
 
     }
 
 }

 
 
 const Machine = new listofDrinks();
 console.log('Select of the drink:');
 Machine.listDrinks();
 console.log('--');
 Machine.getdrink(4);
 console.log('--');
 console.log('1- confirmar , 2 - cancelar');
 Machine.confirmedrink(2);
 //Machine.listDrinks();