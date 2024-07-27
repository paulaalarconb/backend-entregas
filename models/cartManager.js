// models/cartManager.js
const fs = require('fs');
const path = './data/carts.json';

class CartManager {
    static getAll() {
        const data = fs.readFileSync(path, 'utf8');
        return JSON.parse(data);
    }

    static getById(id) {
        const carts = this.getAll();
        return carts.find(c => c.id == id);
    }

    static add(cart) {
        const carts = this.getAll();
        cart.id = carts.length ? carts[carts.length - 1].id + 1 : 1;
        carts.push(cart);
        fs.writeFileSync(path, JSON.stringify(carts, null, 2));
    }

    static update(id, updatedCart) {
        let carts = this.getAll();
        const index = carts.findIndex(c => c.id == id);
        if (index !== -1) {
            carts[index] = { ...carts[index], ...updatedCart, id };
            fs.writeFileSync(path, JSON.stringify(carts, null, 2));
        }
    }

    static delete(id) {
        let carts = this.getAll();
        carts = carts.filter(c => c.id != id);
        fs.writeFileSync(path, JSON.stringify(carts, null, 2));
    }
}

module.exports = CartManager;
