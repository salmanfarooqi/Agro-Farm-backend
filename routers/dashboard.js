const express=require('express')
const getDashboardData = require('../controllers/admin/dashboard')
const dashobardRouter=express.Router()

dashobardRouter.get('/dashobard',getDashboardData)

module.exports=dashobardRouter