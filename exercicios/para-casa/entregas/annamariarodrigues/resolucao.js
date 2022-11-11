class listofDrinks {
    drink = new Array();
 
    constructor() {
       this.drink = [
          { id: 1, name: 'Coca Cola', price: 8, brand: 'coca-cola', flavor: 'coca' },
          { id: 2, name: 'Guaraná Natural', price: 8, brand: 'garavita', flavor: 'guaraná' },
          { id: 3, name: 'Cerveja', price: 8, brand: 'ambev', flavor: 'lupo' },
          { id: 4, name: 'Água', price: 8, brand: 'coca-cola', flavor: 'h2o' }];
      
    }
 
    listDrinks() {
      const menuDrink =[];
       for (let drink of this.drink) {
        
        menuDrink.push(`<li>${drink.id} - ${drink.name} </li>`);  
       }
       return menuDrink;
    }
 
    getdrink(code) {
       const indexDrink = this.drink.findIndex((b) => b.id == code);
       if (indexDrink != -1) {
          const nameDrink = this.drink[indexDrink].name;
          const priceDrink = this.drink[indexDrink].price;
          const brandDrink = this.drink[indexDrink].brand;
          const flavorDrink = this.drink[indexDrink].flavor;
         return (`${nameDrink}, custa R$ ${priceDrink}, seu fabricante é ${brandDrink} e o sabor é ${flavorDrink}`);
      
       }
       else {return('Operação inválida');
     }
    }
 
    confirmedrink(value) {
       switch (value) {
          case '1':
            return ('Bebida confirmada.');
             break;
          case '2':
        return ('Bebida cancelada.');
             break;
          case '3':
             return false;
             break;
          default:
             console.error('Operação inválida');
       }
 
    }
 
 }
 
 
 const Machine = new listofDrinks();
  const h2 = document.querySelector('#menu');
 h2.innerHTML = Machine.listDrinks();
 
 function consultar(){
    const input = document.querySelector('#value');
    const value = input.value;
    const selection = document.querySelector('#selection');
    selection.innerHTML = Machine.getdrink(value);
    
    const h5 = document.querySelector("#mensagem");
    h5.textContent = "Opção: 1- confirmar , 2 - cancelar ,3- sair do menu";
   
  
 }
 
 function comprar(){
    const option = document.querySelector('#option');
    const optionvalue = option.value;
    result.innerHTML = Machine.confirmedrink(optionvalue);
    
 }
 
 