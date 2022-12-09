//exercicios feitos pela profa aqui

//const { Bebida } = require('./Bebida');
const bebidas = require('./bebidasMock.js');
const prompt = require('prompt-sync')();

let opcao = 1;
const regexApenasDigitos = /^[0-9]+$/;

function exibirMenuBebidas() {
    do {
        console.clear();
        console.log("\n*** Máquina de Bebidas **\n");
        console.log("Obs: Digite o número da opção para escolher a bebida ou digite 0 para sair.\n");

        bebidas.forEach(bebida => {
            console.log(`${bebida.id} - ${bebida.nome}`);
        })

        opcao = Number(prompt("Digite a opção desejada (somente números): "));

        if (opcao === 0) {
            console.log(`\n********* Programa encerrado com sucesso *********`);
            process.exit(1);
        }     

    } while (isNaN(opcao) || !regexApenasDigitos.test(opcao) || opcao < 0 || opcao > bebidas.length);
    exibirBebidaEscolhida();
}

function exibirBebidaEscolhida() {
    let acao;
    const bebidaEscolhida = bebidas[opcao - 1];
    do {
        console.clear();
        console.log(`Você escolheu a bebida:`);
        console.log(`\n${bebidaEscolhida.getDescricao()}`);
        acao = prompt("Deseja confirmar? (S - Confirmar / N - Voltar ao menu principal): ");
    } while (acao !== "S" && acao !== "N");

    if (acao === "S") {
        console.log(`\nVocê comprou a bebida ${bebidaEscolhida.nome}! Efetue o pagamento de RS${bebidaEscolhida.preco} e retire a opção escolhida na máquina.`);
        console.log(`\n Volte sempre n`);
    } else {
        exibirMenuBebidas();
    }
}

exibirMenuBebidas();
