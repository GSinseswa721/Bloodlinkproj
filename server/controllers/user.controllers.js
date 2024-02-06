const { CommandSucceededEvent } = require('mongodb');
const UserModel = require('../models/user.models');
const err = require('../error/errorHandler');
const { findUserById } = require('../controllers/auth.controllers');
const Donation = require('../models/donation.models');


// const expressDonationIntent = async (req, res, next) => {
//     const {userId, donationAvailability} = req.body;

//     try{
//         const user = await UserModel.findByIdAndUpdate(userId, {donationAvailability}, {new: true});

//         if (!user){
//             return res.status(404).json({success: false, message:"User not found!"});
//         }
//         res.status(200).json({success: true, message:"Donation intent expressed successfully!"});
//     }
//     catch (err) {
//         console.error('Error in expressDonationIntent:', err);
//         next(err);

//     }
// }



// Express donation intent controller
const expressDonationIntent = async (req, res, next) => {
    const { userId, donationAvailability, location } = req.body;

    try {
        // Update user's donationAvailability if provided
        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            { donationAvailability },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found!" });
        }

        // Create a new donation entry
        const newDonation = new Donation({
            userId,
            location,
            status: "Pending",
            // Other fields as needed
        });

        // Save the new donation entry
        await newDonation.save();

        res.status(200).json({ success: true, message: "Donation intent expressed successfully!" });
    } catch (err) {
        console.error('Error in expressDonationIntent:', err);
        next(err);
    }
};


// Controller to get all users
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.find({}, 'fullName bloodGroup');
        res.json({ users: allUsers });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


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

const getUserDonationHistory = async (req, res, next) => {
    const { userId } = req.params;

    try {
        const donations = await Donation.find({ userId }).sort({ date: -1 });
        res.json(donations);
    } catch (err) {
        console.error('Error in getUserDonationHistory:', err);
        next(err);
    }
};


// donation.controllers.js



// Controller function to get all donations for a user
const getUserDonations = async (req, res, next) => {
    const userId = req.params.userId;

    try {
        const donations = await Donation.find({ userId });
        res.status(200).json({ success: true, data: donations });
    } catch (error) {
        console.error('Error in getUserDonations:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};








const findById = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await findUserById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error('Error finding user by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};









module.exports = {
    expressDonationIntent,
    getAllUsers,
    viewUserDetails,
    findById,
    getUserDonationHistory
};

