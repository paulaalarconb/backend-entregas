// models/productManager.js
const fs = require('fs');
const path = './data/products.json';

class ProductManager {
    static getAll() {
        const data = fs.readFileSync(path, 'utf8');
        return JSON.parse(data);
    }

    static getById(id) {
        const products = this.getAll();
        return products.find(p => p.id == id);
    }

    static add(product) {
        const products = this.getAll();
        product.id = products.length ? products[products.length - 1].id + 1 : 1;
        products.push(product);
        fs.writeFileSync(path, JSON.stringify(products, null, 2));
    }

    static update(id, updatedProduct) {
        let products = this.getAll();
        const index = products.findIndex(p => p.id == id);
        if (index !== -1) {
            products[index] = { ...products[index], ...updatedProduct, id };
            fs.writeFileSync(path, JSON.stringify(products, null, 2));
        }
    }

    static delete(id) {
        let products = this.getAll();
        products = products.filter(p => p.id != id);
        fs.writeFileSync(path, JSON.stringify(products, null, 2));
    }
}

module.exports = ProductManager;
