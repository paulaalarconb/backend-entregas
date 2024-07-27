// controllers/cartController.js
const CartManager = require('../models/cartManager.js');

const addCart = (req, res) => {
    const newCart = { products: [] };
    CartManager.add(newCart);
    res.status(201).send('Cart created');
};

const getCartById = (req, res) => {
    const cart = CartManager.getById(req.params.cid);
    if (cart) {
    res.json(cart.products);
    } else {
    res.status(404).send('Cart not found');
    }
};

const addProductToCart = (req, res) => {
    const cart = CartManager.getById(req.params.cid);
    if (cart) {
        const product = cart.products.find(p => p.product == req.params.pid);
        if (product) {
            product.quantity += 1;
        } else {
            cart.products.push({ product: req.params.pid, quantity: 1 });
        }
        CartManager.update(req.params.cid, cart);
        res.send('Product added to cart');
    } else {
        res.status(404).send('Cart not found');
    }
};

module.exports = {
    addCart,
    getCartById,
    addProductToCart,
};
