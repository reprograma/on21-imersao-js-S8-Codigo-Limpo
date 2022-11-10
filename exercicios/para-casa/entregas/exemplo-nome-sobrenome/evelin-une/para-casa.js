const listaBebidas = [
    {
        nome: "Água Mineral",
        sabor:  "sem gás",
        marca: "Lindoya",
        preco: 2.00
    },
    {
        nome: "Suco",
        sabor:  "Laranja",
        marca: "Sufresh",
        preco: 3.00
    },
    {
        nome: "Suco",
        sabor:  "Uva",
        marca: "Sufresh",
        preco: 3.00
    },
    {
        nome: "Refrigerante",
        sabor:  "Coca",
        marca: "Coca cola",
        preco: 4.50
    },
    {
        nome: "Refrigerante",
        sabor:  "Guaraná",
        marca: "Guaraná ANTARCTICA",
        preco: 4.50
    },
    {
        nome: "Refrigerante",
        sabor:  "Uva",
        marca: "Coca cola",
        preco: 4.50
    },
    {
        nome: "Refrigerante",
        sabor:  "Limão",
        marca: "Sprite",
        preco: 4.50
    }
]

function maquinaDeBebidas(){
    abrirMenu(listaBebidas);   

    const bebidaEscolhida = Number(window.prompt("Para olhar o menu abra o console do seu navegador.\n Digite o número da sua bebida: "));
    
    switch(bebidaEscolhida){
        case 0:
            alert(`Bebida escolhida: ${listaBebidas[0].nome} sabor: ${listaBebidas[0].sabor}`);
            break;
        case 1:
            alert(`Bebida escolhida: ${listaBebidas[1].nome} sabor: ${listaBebidas[1].sabor}`)
            break;
        case 2:
            alert(`Bebida escolhida: ${listaBebidas[2].nome} sabor: ${listaBebidas[2].sabor}`)
            break;
        case 3:
            alert(`Bebida escolhida: ${listaBebidas[3].nome} sabor: ${listaBebidas[3].sabor}`)
            break;
        case 4:
            alert(`Bebida escolhida: ${listaBebidas[4].nome} sabor: ${listaBebidas[4].sabor}`)
            break;
        case 5:
            alert(`Bebida escolhida: ${listaBebidas[5].nome} sabor: ${listaBebidas[5].sabor}`)
            break;
        case 6:
            alert(`Bebida escolhida: ${listaBebidas[6].nome} sabor: ${listaBebidas[6].sabor}`)
            break;
        default:
            alert("Opção inválida.")
            break;
    }

    const outraBebida = Number(prompt("Digite a opção desejada: \n 1- Escolher outra bebida \n 2- sair"));
        
        switch(outraBebida){
            case 1: 
                maquinaDeBebidas();
                break;
            case 2:
                alert("Obrigada por utilizar nosso serviço, Até a próxima!")    
            }
}

function abrirMenu(listaBebidas){
    
    console.log("-- Menu de Bebidas ---")
    console.table(listaBebidas);
}

maquinaDeBebidas();