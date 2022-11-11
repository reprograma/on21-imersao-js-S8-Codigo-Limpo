const { Bebida } = require('./Bebida');
let bebidas = [];
bebidas.push(new Bebida("Guaraná Antarctica 350ml", "Refrigerante", 2.79, "Antarctica", "Guaraná"));
bebidas.push(new Bebida("Pepsi 350ml", "Refrigerante", 3.50, "Pepsi", "Cola"));
bebidas.push(new Bebida("Sukita 350ml", "Refrigerante", "1.90", "Sukita", "Laranja"));
bebidas.push(new Bebida("Soda Antarctica 350ml", "Refrigerante", 3.50, "Limão"));
bebidas.push(new Bebida("Gatorade Uva 500ml", "Isotônico", 4.49, "Gatorade", "Uva"));
bebidas.push(new Bebida("Fusion Loud 1L", "Energético", 7.99, "Fusion"));
bebidas.push(new Bebida("Red Bull Melância 250ml", "Energético", 8.60, "Red Bull", "Melancia"));
bebidas.push(new Bebida("Néctar de Uva Tial 1L", "Suco", 5.98, "Tial", "Uvo"));
bebidas.push(new Bebida("Kero Coco 1L", "Água de coco", 11.74, "Kero Coco"));
bebidas.push(new Bebida("Chá Lipton Pêssego 340ml", "Ice Tea", 2.99, "Lipton"));
bebidas.push(new Bebida("Vinho Tinto Bordô Suave Santomé 1L", "Vinho tinto", 24.90, "Santomé"));
bebidas.push(new Bebida("Vinho Tinto Cabernet Merlot Santa Helena Reservado 750ml", "Vinho tinto", 58.50, "Cabernet"));
bebidas.push(new Bebida("Vinho Tinto Suave de Mesa Pérgola 1L", "Vinho tinto", 23.50, "Pérgola"));
bebidas.push(new Bebida("Vinho Branco Viura Sauvignon Blanc Toro Loco 750ml", "Vinho branco", 58.70, "Sauvignon Blanc"));
bebidas.push(new Bebida("Vinho Branco Jurupinga Dinalle 975ml", "Vinho branco", 31.21, "Jurupinga"));

module.exports = bebidas;