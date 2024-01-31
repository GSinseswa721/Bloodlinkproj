const { CommandSucceededEvent } = require('mongodb');
const UserModel = require('../models/user.models');
const err = require('../error/errorHandler');


const expressDonationIntent = async (req, res, next) => {
    const {userId, donationAvailability} = req.body;

    try{
        const user = await UserModel.findByIdAndUpdate(userId, {donationAvailability}, {new: true});

        if (!user){
            return res.status(404).json({success: false, message:"User not found!"});
        }
        res.status(200).json({success: true, message:"Donation intent expressed successfully!"});
    }
    catch (err) {
        console.error('Error in expressDonationIntent:', err);
        next(err);

    }
}

module.exports = expressDonationIntent;

