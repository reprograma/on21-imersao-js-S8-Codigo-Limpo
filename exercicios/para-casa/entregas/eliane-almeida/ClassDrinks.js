class Drinks {
    name;
    price;
    brand;
    flavor;
    drinksList;

    constructor(name, price, brand, flavor, drinksList) {
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.flavor = flavor;
        this.constructor.drinksList.push({"Name": this.name, "Price": this.price, "brand": this.brand, "flavor": this.flavor})
    }

    static drinksList = [
        {"Name": this.name, "Price": this.price, "brand": this.brand, "flavor": this.flavor}
    ];
}

module.exports = Drinks