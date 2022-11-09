const listaDeBebidas = [

];

function escolherBebidas(nomeDaBebida) {
  if (nomeBebida === "Água") {
    return listaDeBebidas[0];
  } else if (nomeDaBebida === "Suco") {
    return listaDeBebidas[1];
  } else if (nomeDaBebida === "Chá") {
    return listaDeBebidas[2];
  } else if (nomeDaBebida === "Vinho") {
    return listaDeBebidas[3];
  } else if (nomeDaBebida === "Refrigerante") {
    return listaDeBebidas[4];
  } else if (nomeDaBebida === "Soda") {
    return listaDeBebidas[5];
  } else {
    throw Error("Essa bebida não está disponível!");
  }
}

function menuBebidas() {

}

menuBebidas();
