// controllers/productController.js
const ProductManager = require('../models/productManager.js');

const getAllProducts = (req, res) => {
    const products = ProductManager.getAll();
    res.json(products);
};

const getProductById = (req, res) => {
    const product = ProductManager.getById(req.params.pid);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
};

const addProduct = (req, res) => {
    const newProduct = req.body;
    ProductManager.add(newProduct);
    res.status(201).send('Product added');
};

const updateProduct = (req, res) => {
    const updatedProduct = req.body;
    ProductManager.update(req.params.pid, updatedProduct);
    res.send('Product updated');
};

const deleteProduct = (req, res) => {
    ProductManager.delete(req.params.pid);
    res.send('Product deleted');
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
};
