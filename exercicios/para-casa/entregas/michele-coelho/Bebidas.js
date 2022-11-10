class Bebidas {
    nome;
    preco;
    marca;
    sabor;
    listaDeBebidas

    constructor(nome, preco, marca, sabor) {
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
        this.sabor = sabor;
        this.constructor.listaDeBebidas.push({ "Nome": this.nome, "Preco": this.preco, "Marca": this.marca, "Sabor": this.sabor });
    }
    static listaDeBebidas = [
        { "Nome": "Agua", "Preco": "2", "Marca": "Indaia", "Sabor": "Mineral" },
        { "Nome": "Cafe", "Preco": "9", "Marca": "São brás", "Sabor": "Descafeinado" },
        { "Nome": "Refrigerante", "Preco": "7", "Marca": "Coca-cola", "Sabor": "Cola" }
    ];
}
module.exports = Bebidas;
