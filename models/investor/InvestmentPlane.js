// const mongoose = require('mongoose');

// const investmentPlanSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     duration: { type: String, required: true },
//     amount: { type: Number, required: true },
//     interestRate: { type: String, required: true },
//     Status: { type: String, default: 'pending' }
// });

// module.exports = mongoose.model('InvestmentPlan', investmentPlanSchema);


const mongoose = require('mongoose');

const investmentPlanSchema = new mongoose.Schema({
    name: { type: String, required: true },
    duration: { type: String, required: true },
    amount: { type: Number, required: true },
    interestRate: { type: String, required: true },
    status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('InvestmentPlan', investmentPlanSchema);
