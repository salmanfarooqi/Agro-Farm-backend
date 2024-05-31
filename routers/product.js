const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/admin/product');

// Get all products
productRouter.get('/products', productController.getAllProducts);

// Get a single product by ID
productRouter.get('/products/:id', productController.getProductById);

// Create a new product
productRouter.post('/products', productController.createProduct);

// Update an existing product
productRouter.put('/products/:id', productController.updateProduct);

// Delete a product
productRouter.delete('/products/:id', productController.deleteProduct);

module.exports = productRouter;
