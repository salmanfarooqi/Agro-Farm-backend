
// const mongoose = require('mongoose');

// const purchaseSchema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
//     planId: { type: mongoose.Schema.Types.ObjectId, ref: 'InvestmentPlan' },
//     purchaseDate: { type: Date, default: Date.now },
//     amountInvested: Number,
//     paymentMethod: String,
//     transactionId: String,
//     endDate: Date
// });

// module.exports = mongoose.model('Purchase', purchaseSchema);


const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' }, // Ensure the ref is correct
    planId: { type: mongoose.Schema.Types.ObjectId, ref: 'InvestmentPlan' }, // Ensure the ref is correct
    purchaseDate: { type: Date, default: Date.now },
    amountInvested: Number,
    paymentMethod: String,
    transactionId: String,
    endDate: Date
});

module.exports = mongoose.model('Purchase', purchaseSchema);
