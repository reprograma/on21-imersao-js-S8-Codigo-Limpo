const prompt = require("prompt-sync")();

function machine() {

    let option = prompt(
        "==================Drink  Machine================== \n Digite uma opção de bebida: \n ================================================ \n 1- Café: R$ 10.00 - Tabajara - Extra forte \n ==  \n 2- Refrigerante: R$ 5.00 - Sprite - Soda Limonada \n == \n 3- Suco: R$ R$ 7.00 - Caseiro - Laranja \n == \n 4- Água: R$ 3.00 - Indaiá - \n == \n 5: Cerveja R$ 12.00 - R$ - Larger - Cacildis \n == \n 0- Sair \n"
      );

    while (option!= "0") {
        switch (option) {
          case "1":
            console.log("Você escolheu café, Aproveite!");
            break;
          case "2":
            console.log("Você escolheu refrigerante, Aproveite!");
            break;
          case "3":
            console.log("Você escolheu suco de laranja, Aproveite!");
            break;
          case "4":
            console.log("Você escolheu água, Aproveite!");
            break;
          case "5":
            console.log("Você escolheu cerveja, Aproveite!");
            break;
          default:
            console.log("Opção inválida");
            break;
        }
        option = prompt(
          "==================Drink  Machine================== \n Digite uma opção de bebida: \n ================================================ \n 1- Café: R$ 10.00 - Tabajara - Extra forte \n ==  \n 2- Refrigerante: R$ 5.00 - Sprite - Soda Limonada \n == \n 3- Suco: R$ R$ 7.00 - Caseiro - Laranja \n == \n 4- Água: R$ 3.00 - com gás - Indaiá - \n == \n 5: Cerveja R$ 12.00 - R$ - Larger - Cacildis \n ==  0- Sair \n"
        );
        if (option == "0") {
          console.log("Obrigada! Aproveite sua bebida");
        }
      }
}

machine();
