const express = require('express');
const orderRouter = express.Router();
const orderController = require('../controllers/buyer/order');


orderRouter.get('/orders', orderController.getAllOrders);

// orderRouter.get('/orders/:id', orderController.getOrderById);

// orderRouter.post('/orders', orderController.createOrder);

// orderRouter.put('/orders/:id', orderController.updateOrder);

// orderRouter.delete('/orders/:id', orderController.deleteOrder);

module.exports = orderRouter;
