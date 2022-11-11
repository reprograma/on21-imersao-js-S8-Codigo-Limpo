
class Bebida {
    #id;
    nome;
    tipo;
    preco;
    marca;
    sabor;

    constructor(nome, tipo, preco, marca, sabor) {
        this.#id = Bebida.getProximoId();

        if (nome === undefined || tipo === undefined || preco === undefined || marca === undefined) {
            throw new Error('É necessário inserir as informações obrigatórias (nome, tipo, preço e marca).');
        }
        if (typeof nome === "string") {
            this.nome = nome;
        }
        if (typeof tipo === "string") {
            this.tipo = tipo;
        }
        if (typeof preco === "number" && preco > 0) {
            this.preco = preco;
        }
        if (typeof marca === "string") {
            this.marca = marca;
        }
        if (typeof sabor === "string") {
            this.sabor = sabor;
        }
    }

    static ultimoId = 0;

    static getProximoId() {
        return ++Bebida.ultimoId;
    }

    getDescricao() {
        let descricaoSabor = this.sabor !== undefined ? 'Sabor: ' + this.sabor : ''
        return `Código: ${this.#id}\nDescrição: ${this.nome}\nTipo: ${this.tipo}\nPreço: R$${this.preco}\nMarca: ${this.marca}\n${descricaoSabor}`;
    }

    get id() {
        return this.#id;
    }
}

module.exports = { Bebida };