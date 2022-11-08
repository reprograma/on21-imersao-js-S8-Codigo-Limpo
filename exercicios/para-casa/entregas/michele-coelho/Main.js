const Bebidas = require('./Bebidas.js');
//installar o prompt-sync
const prompt = require('prompt-sync');
const promptt = prompt();


let sair = false;
let cadastroOk = false;

function cadastrarBbebida(){
    cadastroOk = false;
    while (!cadastroOk) {
        let qtdCadastro = promptt("Digite o número de quantas bebidas deseja cadastrar.");

        if (qtdCadastro > 0) {
            for (let j = 0; j < qtdCadastro; j++) {

                cadastroOk = false;
                while (!cadastroOk) {
                    let nome = promptt("Digite o nome da bebida selecionada.");
                    let marca = promptt("O marca da bebida selecionada.");
                    let preco = promptt("O preço da bebida selecionada.");
                    let sabor = promptt("O sabor da bebida selecionada.");

                    if (nome !== "" && preco !== "" && marca !== "" && sabor !== "") {
                        let bebidas = new Bebidas(nome, preco, marca, sabor);
                        cadastroOk = true;
                    } else {
                        console.log("Não é possível realizar o cadastro com nomes vazios, digite todos os campos. Tente novamente!");
                    }
                }
            }
        } else {
            console.log("Digite um número válido!");
        }
    }
}
function imprimirListaBebidas() {
    console.log("\n Lista de bebidas oferecidas: \n");
    if (Bebidas.listaDeBebidas.length > 0) {
        for (let i = 0; i < Bebidas.listaDeBebidas.length; i++) {
            console.log(`Bebida ${i + 1}: ${Bebidas.listaDeBebidas[i].Nome}`);
        }
        console.log("\n");
    } else {
        console.log("Total de 0 bebidas disponível.");
    }
}
function pegarBebida(id) {
    console.log("\n Bebida selecionada");
    console.log(`Bebida ${id}:
         Nome:`, Bebidas.listaDeBebidas[id - 1].Nome,
        `; Preço:`, Bebidas.listaDeBebidas[id - 1].Preco,
        `; Marca:`, Bebidas.listaDeBebidas[id - 1].Marca,
        `; Sabor:`, Bebidas.listaDeBebidas[id - 1].Sabor
    );
}
function deletarBebida(nome) {
    let resul = Bebidas.listaDeBebidas.filter(item => { return item.Nome != nome });
    Bebidas.listaDeBebidas = [];
    for (let item of resul) {
        Bebidas.listaDeBebidas.push({ "Nome": item.Nome, "Preco": item.Preco, "Marca": item.Marca, "Sabor": item.Sabor });
    }
    console.log("Bebida deletada!");
}

do {
    let opcao = promptt("\n ** Menu ** \n Digite uma opção: \n 1 - Cadastrar; \n 2 - Listar bebidas; \n 3 - Pegar bebida; \n 4 - Deletar bebida;\n 5 - Sair \n");
    switch (opcao) {
        case "1":cadastrarBbebida(); break;
        case "2": imprimirListaBebidas(); break;
        case "3": {
            let id = promptt("Digite o número da bebida selecionada.");
            pegarBebida(id);
        }; break;
        case "4": {
            let nomeBebida = promptt("Digite o nome da bebida que deseja deletar.");
            deletarBebida(nomeBebida);
        }; break
        case "5": sair = true; break
        default: console.log("Ops! Opção inválida!");
    }
} while (!sair);
