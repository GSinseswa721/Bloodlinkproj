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





// Controller to get all users
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.find({}, 'fullName bloodGroup');
        res.json({ users: allUsers });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// admin.controllers.js

const viewUserDetails = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await UserModel.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ user });
    } catch (error) {
        console.error('Error viewing user details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};







module.exports = {
    expressDonationIntent,
    getAllUsers,
    viewUserDetails
};

