const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (email, message, subject) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {

                user: process.env.EMAIL,
                pass: process.env.PASS,

            },
            tls: {
                rejectUnauthorized: false 
            }
        });

        const options = {


            from: process.env.EMAIL,
            to: email,
            subject: subject,
            text: message
        };

        const info = await transporter.sendMail(options);

        console.log("Email Sent: " + info.response);
        return "Email Sent: " + info.response;
    } catch (error) {
        console.error("Failed to send email: " + error);
        throw error; 
    }
};

          



module.exports = sendEmail;
