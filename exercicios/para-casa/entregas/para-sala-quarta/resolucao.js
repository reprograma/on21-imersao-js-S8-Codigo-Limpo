// 1- Qual a melhor maneira de refatorar esta concatenação?

const prompt = require('prompt-sync');
const promptt = prompt();
let nome = promptt("Qual o seu nome?");
let idade = Number(promptt("Qual a sua idade?"));

console.log(`seu nome é ${nome} e sua idade é ${idade}`);


// 2- Escreva uma função refatorada que receba a idade de uma pessoa em anos e retorne a mesma idade em dias;
function idadeDias(idade) {
    return idade * 365;
}
console.log(`Sua idade foi transformada em: ${idadeDias(22)} dias.`);


// 3- Crie uma função refatorada que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. Responda. Qual a melhor estrutura condicional? Swith OU IF?

function mes(numero) {
    switch (numero) {
        case 1: console.log(`O número ${numero} corresponde ao mês de Janeiro`); break;
        case 2: console.log(`O número ${numero} corresponde ao mês de Fevereiro`); break;
        case 3: console.log(`O número ${numero} corresponde ao mês de Março`); break;
        case 4: console.log(`O número ${numero} corresponde ao mês de Abril`); break;
        case 5: console.log(`O número ${numero} corresponde ao mês de Maio`); break;
        case 6: console.log(`O número ${numero} corresponde ao mês de Junho`); break;
        case 7: console.log(`O número ${numero} corresponde ao mês de Julho`); break;
        case 8: console.log(`O número ${numero} corresponde ao mês de Agosto`); break;
        case 9: console.log(`O número ${numero} corresponde ao mês de Setembro`); break;
        case 10: console.log(`O número ${numero} corresponde ao mês de Outubro`); break;
        case 11: console.log(`O número ${numero} corresponde ao mês de Novembro`); break;
        case 12: console.log(`O número ${numero} corresponde ao mês de Dezembro`); break;
        default: console.log("Error! Digite um número de 1 a 12"); break;
    }
}
mes(7);

/*  4 - Cadastro de Contas
Crie um cadastro de contas com nome e valor do produto e ao final, imprima um extrato com o preço total das contas */
let contas;
let arr = [];

let qtdItensCadastro = Number(promptt("Digite o número de itens que deseja cadastrar"));
function CadastroContas() {
    for (let i = 0; i < qtdItensCadastro; i++) {
        let nome = promptt("Qual o nome?");
        let valor = Number(promptt("Qual o valor?"));
        arr.push(contas = { "Nome": nome, "Valor": valor });
    };
}
function imprimir(arr) {
    let somaValor = 0;
    console.log(` ============ Cadastro de Contas ============= \n Extrato:`);
    for (const item of arr) {
        console.log(`Item:${item.Nome}       valor: ${item.Valor}`);
        somaValor += item.Valor;
    }
    return `\n Valor total: R$ ${somaValor}`;
}
CadastroContas();
console.log(imprimir(arr));