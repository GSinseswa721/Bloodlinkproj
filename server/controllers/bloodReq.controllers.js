const UserModel = require('../models/user.models');
// const hospitalModel = require('../models/hospital.models');
const nodemailer = require('nodemailer');
const BloodRequestModel = require('../models/request.models');



const sendEmail = async (recipient, subject, message) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'bloodlinkhospital@gmail.com',
                pass: 'yiaf irii tdls snmk',
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: 'bloodlinkhospital@gmail.com',
            to: recipient,
            subject: subject,
            text: message,
        };

        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${recipient}`);
    } catch (error) {
        console.log('Error sending email:', error);
        // throw Error('Failed to send email');
    }
};

const bloodRequest = async (req, res, next) => {
    try {
        const { hospitalID, emergencyDetails, bloodTypesRequired } = req.body;

        // Retrieving donors with matching specified blood types
        const matchingDonors = await UserModel.find({ bloodGroup:req.body.bloodTypesRequired  });
        console.log(matchingDonors)
        for (const donor of matchingDonors) {
            const message = `Dear ${donor.fullName},\n\nThere is an urgent need for your blood type (${donor.bloodGroup}) at ${req.body.emergencyDetails.location}. Please respond if you are available for donation.\n\nBest Regards,\nBLOODLINK Team`;
            sendEmail(donor.email , 'Urgent Blood Donation Request', message);
        }

        const savedRequest = await BloodRequestModel.create(req.body);

        res.json({
            requestID: savedRequest._id,
            status: 'success',
            message: 'General blood request initiated. Donors with specified blood types alerted.',
        });
    } catch (error) {
        console.error('Error processing blood request:', error);
        res.status(500).json({ error: error.message, message: 'Internal server error' });
    }
};

module.exports = bloodRequest;
