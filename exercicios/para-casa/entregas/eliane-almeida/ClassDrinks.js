class Drinks {
    name;
    price;
    brand;
    flavor;
    drinksList;

    constructor(name, price, brand, flavor) {
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.flavor = flavor;
        this.constructor.drinksList.push({"Name": this.name, "Price": this.price, "brand": this.brand, "flavor": this.flavor})
    }

    static drinksList = [
        { "Nome": "Agua", "Preco": "2", "Marca": "Indaia", "Sabor": "Mineral" },   
        { "Nome": "Cafe", "Preco": "9", "Marca": "São brás", "Sabor": "Descafeinado" },
        { "Nome": "Refrigerante", "Preco": "7", "Marca": "Coca-cola", "Sabor": "Cola" }
    ];
}

module.exports = Drinks