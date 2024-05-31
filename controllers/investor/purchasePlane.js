
const Purchase = require('../../models/investor/planePurchase');

const InvestmentPlan = require('../../models/investor/InvestmentPlane'); 
const User = require('../../models/user');

exports.buyPlane=async(req,res)=>{
    try {
        const {planeId,userId}=req.body
        const plan=new Purchase({
            planeId,userId
        })

        await plan.save()
        res.json({message:"plane is booked sucessfully"})

        
    } catch (error) {
        res.json(error)
        
    }
}
exports.getAllPurchases = async (req, res) => {
    try {
        const { userId, planId } = req.query;

        // Build the query object dynamically based on the provided query parameters
        const query = {};
        if (userId) {
            query.userId = userId;
        }
        if (planId) {
            query.planId = planId;
        }

        const purchases = await Purchase.find(query)
            .populate('userId')
            .populate({
                path: 'planId',
                select: 'Status' // Specify the fields to include
            });

        res.send(purchases);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.getPurchaseById = async (req, res) => {
    try {
        const { purchaseId } = req.params;
        const purchase = await Purchase.findById(purchaseId).populate('userId').populate('planId');
        res.send(purchase);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
