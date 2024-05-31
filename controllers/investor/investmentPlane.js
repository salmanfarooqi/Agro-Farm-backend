
const InvestmentPlan = require('../../models/investor/InvestmentPlane');

exports.getAllPlans = async (req, res) => {
    try {
        const plans = await InvestmentPlan.find();
        res.send(plans);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.addPlan = async (req, res) => {
    try {
        const { name, duration, interestRate,Status,amount } = req.body
        const plan = new InvestmentPlan({
            name,
            duration,
            Status,
            amount,
            interestRate
        });
        await plan.save();
        res.status(201).send({message:"investment plane is sucessfully added"});
        console.log("plan",plan)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.updatePlan = async (req, res) => {
    try {
        const { planId } = req.params;
        const { name, duration, interestRate } = req.body;
        const updatedPlan = await InvestmentPlan.findByIdAndUpdate(
            planId,
            { name, duration, interestRate },
            { new: true }
        );
        res.send(updatedPlan);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
