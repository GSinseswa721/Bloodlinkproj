const Donation = require('../models/donor.models');


// Controller to handle donation submission and appointment generation
exports.submitDonation = async (req, res) => {
    const { fullName, mobileNumber, nationalID, email, city, province, district, bloodGroup, age, profilePicture, gender, donationAvailability, appointmentDate } = req.body;

    try {
        const Donation = new Donation({
            fullName,
            mobileNumber,
            nationalID,
            email,
            city,
            province,
            district,
            bloodGroup,
            age,
            profilePicture,
            gender,
            donationAvailability,
        });

        
        await Donation.save();
        return res.status(201).json({ message: "Donation submitted successfully", appointment });
    } catch (error) {
        console.error("Error submitting donation:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
