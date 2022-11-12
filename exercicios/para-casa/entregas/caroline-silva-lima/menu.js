const machineItems = require('./machineItems');

const readline = require('readline-sync');

const menu =  machineItems.map(machineItems=> console.log(machineItems.name , machineItems.price));

const entrance = readline.question('How about a drink? yes/no');

if (entrance.toLocaleUpperCase()==='yes'){
  console.log(menu); 
  const drinkChoice = readline.question ('enter the name of the drink you want')
  const answer = machineItems.filter(machineItems => machineItems.name === entrance);
  console.table(answer);
}
else{
    console.log(`Esses são todos os livros disponíveis : ${ menu }}`);
}