var menu = prompt("Bebidas disponíveis:\n"
+ "(Selecione a opção esolhendo um número)\n\n"
+ "1) Coca-Cola\n"
+ "2) Fanta\n"
+ "3) Guaraná\n"
+ "4) Água mineral COM gás\n"
+ "5) Água mineral SEM gás\n"
+ "6) Suco de laranja e \n"
+ "7) Água de coco\n"
);


switch(menu){
    case "1":
        alert("Produto: Cola-Cola\n" + "Preço: R$6,00\n" + "Marca: Cola-Cola\n" + "Sabor: Cola")
        var voltar = prompt("Gostaria de voltar ao menu anterior? Digite Sim ou Não")
    break
    case "2":
        alert("Produto: Fanta\n" + "Preço: 6,00\n" + "Marca: Cola-Cola\n" + "Sabor: Fanta")
    break
    case "3":
        alert("Produto: Guaraná\n" + "Preço: 6,00\n" + "Marca: Cola-Cola\n" + "Sabor: Guaraná")
    break
    case "4":
        alert("Produto: Água mineral COM gás\n" + "Preço: 3,00\n" + "Marca: Indaiá\n" + "Sabor: - ")
    break
    case "5":
        alert("Produto: Água mineral SEM gás\n" + "Preço: 2,50\n" + "Marca: Indaiá\n" + "Sabor: - ")
    break
    case "6":
        alert("Produto: Suco de laranja\n" + "Preço: 8,00\n" + "Marca: - \n" + "Sabor: Laranja")
    break
    case "7":
        alert("Produto: Água de coco\n" + "Preço: 2,00\n" + "Marca: - \n" + "Sabor: - ")
    break
}