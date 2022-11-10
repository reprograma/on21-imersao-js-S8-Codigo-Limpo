//Maquina de bebida

//- criar função => menu => imprimir bebidas => bebidas disponíveis => características (nome, preço, marca e sabor)

const girlsBar = [
  { name: "Cerveja", price: "12,00", brand: "Brahma", flavor: "Puro Malte" },
  { name: "Refrigerante", price: "6,00", brand: "Coca-cola", flavor: "Laranja" },
  { name: "Suco", price: "4,50", brand: "Rel vale", flavor: "Pêssego" },
  { name: "Água", price: "2,00", brand: "Cristal", flavor: "Com gás" },
  { name: "Energético", price: "10,90", brand: "Redbull", flavor: "Coco" },
  { name: "Vinho", price: "15,00", brand: "Pérgula", flavor: "uva" },
  { name: "Cachaça", price: "8,00", brand: "Salinas", flavor: "Milho" },
];



girlsBar.forEach((drink) => {
  console.table(drink.name);
});

function Detail(drink, data) {
  const result = data.find((item) => item.name === drink);
  return result;

}
while (true) {
const drink = prompt("Choose Your Drink:");
  if (drink === "menu") {
    break;
  } else {
    const result = Detail(drink, girlsBar);
    if (result) {
  
      console.log(result);
     
    
    }
  }
}


