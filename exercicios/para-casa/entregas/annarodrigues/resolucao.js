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
     // let menuDrink;
     // menuDrink = new Array();
     const menuDrink =[];
      for (let drink of this.drink) {
       
       menuDrink.push(`<li>${drink.id} - ${drink.name} </li>`);  
      //menuDrink.push(`${drink.id} - ${drink.name}`);
      }
      //return console.table(menuDrink);
      return menuDrink;
   }

   getdrink(code) {
      const indexDrink = this.drink.findIndex((b) => b.id == code);
      if (indexDrink != -1) {
         const nameDrink = this.drink[indexDrink].name;
         const priceDrink = this.drink[indexDrink].price;
         const brandDrink = this.drink[indexDrink].brand;
         const flavorDrink = this.drink[indexDrink].flavor;
        // return (console.log(`${nameDrink}, custa R$ ${priceDrink}, seu fabricante é ${brandDrink} e o sabor é ${flavorDrink}`));
        return (`${nameDrink}, custa R$ ${priceDrink}, seu fabricante é ${brandDrink} e o sabor é ${flavorDrink}`);
     
      }
      else { console.error('Operação inválida');
    }
   }

   confirmedrink(value) {
      switch (value) {
         case '1':
           // console.log('Bebida confirmada.');
           // return true;
           return ('Bebida confirmada.');
            break;
         case '2':
        //    console.log('Bebida cancelada.');
       //     return true;
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
// const validawhile = true;
// while (validawhile) {
//    const Machine = new listofDrinks();
//    console.log('Menu:');
//    Machine.listDrinks();
//    Machine.getdrink('2');
//    console.log('--------');
//    console.table("Opção:\n 1- confirmar\n 2 - cancelar \n 3- sair do menu");
//    console.log('--------');
//    validawhile = Machine.confirmedrink('1');  
//    console.log("vaaa" ,validawhile) ;
//    if (validawhile = 'false' ) 
//    { 
//        validawhile = false;
//    }
      
// }


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
   // const Machineq = new listofDrinks();
   // const h6 = document.querySelector('#result');
   // h6.innerHTML = Machineq.listDrinks();
   
}

