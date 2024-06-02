const user=require('../../models/user')
const order=require('../../models/buyer/order')
const getDashboardData=async(req,res)=>{
    const totalInvestor=await user.countDocuments({role:"investor"})
    const totalBuyer=await user.countDocuments({role:"buyer"})
    const  totalOrder=await order.countDocuments()

    res.json({totalInvestor,totalBuyer,totalOrder})
}

module.exports=getDashboardData