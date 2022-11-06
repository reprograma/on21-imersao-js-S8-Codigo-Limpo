const { resolveObjectURL } = require("buffer");
const readline = require("readline");
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function maquinaDeBebida() {
  const bebidas = [
    {
      nome: "Guaraná",
      preco: 6.5,
      marca: "Guaraná",
      sabor: "Original",
    },
    {
      nome: "Suco de Laranja",
      preco: 8.0,
      marca: "TudoSuco",
      sabor: "Laranja",
    },
    {
      nome: "Água Mineral",
      preco: 3,
      marca: "Crystal",
      sabor: "Sem gás",
    },
    {
      nome: "Café",
      preco: 5,
      marca: "Marcafé",
      sabor: "Expresso",
    },
  ];

  console.log("Iniciando Máquina de Bebidas...");
  const opcoesDisponiveis = listarOpcoes(bebidas);

  interfaceListarBebidas(opcoesDisponiveis, bebidas);
}

function interfaceListarBebidas(opcoesDisponiveis, array) {
  interface.question(`Escolha uma opção: \n${opcoesDisponiveis}`, (input) => {
    if (input == 0) {
      return interface.close();
    }

    if (isNaN(input) || input > array.length) {
      console.log("Opção inválida!");
      interfaceListarBebidas(opcoesDisponiveis, array);
    } else {
      console.log(getOpcaoDados(input, array));
      interface.question(`Digite S para retornar ao menu. `, (string) => {
        if (string.toUpperCase() == "S") {
          interfaceListarBebidas(opcoesDisponiveis, array);
        } else return interface.close();
      });
    }
  });
}

function listarOpcoes(array) {
  let listaOpcoes = "";
  for (i = 0; i <= array.length; i++) {
    if (i < array.length) {
      listaOpcoes += `(${i + 1}) ${array[i].nome} \n`;
    } else listaOpcoes += `(0) Sair \n`;
  }

  return listaOpcoes;
}

function getOpcaoDados(opcaoEscolhida, array) {
  const opcaoDados = array[opcaoEscolhida - 1];
  const dados = `Nome: ${opcaoDados.nome} | Preço: R$${opcaoDados.preco} | Marca: ${opcaoDados.marca} | Sabor: ${opcaoDados.sabor}`;

  return dados;
}

maquinaDeBebida();
