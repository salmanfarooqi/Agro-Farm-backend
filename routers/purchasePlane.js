
const express = require('express');
const purchasePlaneRouter = express.Router();
const investmentController = require('../controllers/investor/purchasePlane');


purchasePlaneRouter.post('/buy', investmentController.buyPlane);

purchasePlaneRouter.get('/purchases', investmentController.getAllPurchases);

purchasePlaneRouter.get('/purchase/:purchaseId', investmentController.getPurchaseById);

module.exports = purchasePlaneRouter;






