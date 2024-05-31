const express = require('express');
const userRouter = express.Router();
const { buyerSignup, adminSignup, investerSignup, BuyerLogin, adminLogin, investerLogin, getAllUser, forgotPassword } = require('../controllers/user')

// Buyer signup route
userRouter.post('/buyer/signup', buyerSignup);

// Admin signup route
userRouter.post('/admin/signup', adminSignup);

// Investor signup route
userRouter.post('/investor/signup', investerSignup);

// Buyer login route
userRouter.post('/buyer/login', BuyerLogin);

// Admin login route
userRouter.post('/admin/login', adminLogin);
userRouter.post('/request',forgotPassword)

// Investor login route
userRouter.post('/investor/login', investerLogin);
userRouter.get('/getAlluser',getAllUser)

module.exports = userRouter;
