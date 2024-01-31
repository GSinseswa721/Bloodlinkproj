const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (email, newPassword) => {
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
            subject: "Reset Password",
            text: `Hello !! \n Your new password is ${newPassword}`, // Use newPassword instead of password

        };

        const info = await transporter.sendMail(options);

        console.log("Email Sent: " + info.response);
        
        const feedbackOptions = {
            from: "bloodlinkhospital@gmail.com",
            to: "umubyeyi750@gmail.com",
            subject: "Feedback",
            text: "This is a feedback email."
        };

        // Send feedback email
        const feedbackInfo = await transporter.sendMail(feedbackOptions);
        console.log("Feedback Email Sent successfully.");
        
        return "Email Sent: " + info.response;
    } catch (error) {
        console.error("Failed to send email: " + error);
        throw error; // Rethrow the error so that the calling code can handle it
    }
};

          



module.exports = sendEmail;
