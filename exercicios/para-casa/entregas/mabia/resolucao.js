const prompt = require("prompt-sync")();
let opcao = prompt(
  "Digite uma opção de bebida: \n 1- café \n 2 - refrigerante \n 3- suco \n 4 - agua \n 5 - cerveja \n 0 - sair"
);

function maquina() {
  while (opcao != "0") {
    switch (opcao) {
      case "1":
        alert("Você escolheu café, Aproveite!");
        console.log("Você escolheu café, Aproveite!");
        break;
      case "2":
        alert("Você escolheu refrigente, Aproveite!");
        break;
      case "3":
        alert("Você escolheu suco, Aproveite!");
        break;

        alert("Você escolheu agua, Aproveite!");
        break;
      case "5":
        alert("Você escolheu cerveja, Aproveite!");
        break;
      default:
        console.log("opção invalida");
        break;
    }
    opcao = prompt(
      "Digite uma opção de bebida: \n 1- café \n 2 - refrigerante \n 3- suco \n 4 - agua \n 5 - cerveja \n 0 - sair"
    );
    if (opcao == "0") {
      alert("Obrigada! Aproveite sua bebida");
    }
  }
}

maquina();
