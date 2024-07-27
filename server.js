// server.js
const express = require('express');
const productRoutes = require('./routes/products.js');
const cartRoutes = require('./routes/carts.js');

const app = express();
const PORT = 8080;

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});